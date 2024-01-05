import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { TStudent } from "../../student.type";

const prisma = new PrismaClient();

export const handleRefreshToken = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);

  const refreshToken = cookies.jwt;
  const foundStudent: TStudent | null = await prisma.student.findFirst({
    where: {
      refreshToken,
    },
    include: {
      address: true,
      profile_image: true,
    },
  });

  if (!foundStudent) return res.sendStatus(403);

  jwt.verify(
    refreshToken,
    process.env.TOKEN_SECRET!,
    (err: any, decoded: any) => {
      if (err || foundStudent?.student_number !== decoded.student_number) {
        return res.sendStatus(403);
      }
      foundStudent && delete foundStudent["password"];
      foundStudent && delete foundStudent["refreshToken"];
      const accessToken = jwt.sign(
        {
          student_data: {
            id: foundStudent.id,
            student_number: foundStudent.student_number,
            role: foundStudent.role,
          },
        },
        process.env.TOKEN_SECRET!,
        {
          expiresIn: "10s",
        }
      );

      res.json({ student: foundStudent, accessToken });
    }
  );
};
