import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { TAdmin } from "../../admin.type";

const prisma = new PrismaClient();

export const handleRefreshToken = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);

  const refreshToken = cookies.jwt;
  const foundAdmin: TAdmin | null = await prisma.admin.findFirst({
    where: {
      refreshToken,
    },
  });

  if (!foundAdmin) return res.sendStatus(403);

  jwt.verify(
    refreshToken,
    process.env.TOKEN_SECRET!,
    (err: any, decoded: any) => {
      if (err || foundAdmin?.name !== decoded.name) {
        return res.sendStatus(403);
      }
      foundAdmin && delete foundAdmin["password"];
      foundAdmin && delete foundAdmin["refreshToken"];
      const accessToken = jwt.sign(
        {
          admin_data: {
            id: foundAdmin.id,
            name: foundAdmin.name,
            role: foundAdmin.role,
          },
        },
        process.env.TOKEN_SECRET!,
        {
          expiresIn: "10s",
        }
      );
      res.json({ admin: foundAdmin, accessToken });
    }
  );
};
