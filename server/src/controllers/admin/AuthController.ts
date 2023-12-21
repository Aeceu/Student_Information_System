import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { TAdmin, TAdminLogin, TAdminSignUp } from "../../admin.type";

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  try {
    const { data }: TAdminLogin = req.body;

    if (!data.name || !data.password) {
      return res.status(400).send("Please fill-up the missing information!");
    }

    const admin: TAdmin | null = await prisma.admin.findFirst({
      where: {
        name: data.name,
      },
    });

    if (!admin) {
      res.status(400).send("Admin doesn't exists!");
    }

    const validPass = await bcrypt.compare(data.password, admin?.password!);

    if (!validPass) {
      return res.status(400).send("Incorrect Password!");
    }

    const admin_data = {
      id: admin?.id,
      name: admin?.name,
      role: admin?.role,
    };

    const accessToken = jwt.sign(admin_data, process.env.TOKEN_SECRET!, {
      expiresIn: "10s",
    });

    const refreshToken = jwt.sign(admin_data, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    await prisma.admin.update({
      where: {
        id: admin?.id,
      },
      data: {
        refreshToken,
      },
    });

    if (admin) {
      delete admin["password"];
      delete admin["refreshToken"];
    }

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: `${admin?.role} AUTHENTICATED!`,
      admin,
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    const { data }: TAdminSignUp = req.body;

    const adminExists = await prisma.admin.findFirst({
      where: {
        name: data.name,
      },
    });

    if (adminExists) return res.status(400).send("Admin already registered!");

    const hashPass = await bcrypt.hash(data.password, 12);

    await prisma.admin.create({
      data: {
        name: data.name,
        password: hashPass,
      },
    });

    res.status(200).send("Registered Successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const logout = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  const refreshToken = cookies.jwt;

  //* Is refreshToken in db?
  const foundUser = await prisma.admin.findFirst({
    where: {
      refreshToken: refreshToken,
    },
  });

  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
    return res.sendStatus(204);
  }

  //* Delete refreshToken in db
  await prisma.admin.update({
    where: {
      id: foundUser.id,
    },
    data: {
      refreshToken: null,
    },
  });

  res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
  res.status(200).send("Cookie removed");
};
