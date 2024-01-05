import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { TStudent, TStudentLogin, TStudentSignUp } from "../../student.type";
import cloudinary from "../../utils/cloudinary";

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  try {
    const { data }: TStudentLogin = req.body;

    const studentExists: TStudent | null = await prisma.student.findFirst({
      where: {
        student_number: data.student_number,
      },
      include: {
        address: true,
        profile_image: true,
      },
    });

    if (!studentExists) {
      return res.status(400).send("Invalid Student Number!");
    }

    const validPass = await bcrypt.compare(
      data.password,
      studentExists.password!
    );

    if (!validPass) {
      return res.status(400).send("Incorrect Password!");
    }

    const student_data = {
      id: studentExists.id,
      student_number: studentExists.student_number,
      role: studentExists.role,
    };

    const accessToken = jwt.sign(student_data, process.env.TOKEN_SECRET!, {
      expiresIn: "10s",
    });

    const refreshToken = jwt.sign(student_data, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    await prisma.student.update({
      where: {
        id: studentExists.id,
      },
      data: {
        refreshToken,
      },
    });

    delete studentExists["password"];
    delete studentExists["refreshToken"];

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: `${studentExists.role} AUTHENTICATED!`,
      student: studentExists,
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    const { data, file }: TStudentSignUp = req.body;

    if (!file) {
      return res.status(400).json("Please add yor 1x1 photo");
    }

    const studentExists = await prisma.student.findFirst({
      where: {
        student_number: data.student_number,
      },
      include: {
        profile_image: true,
      },
    });

    if (studentExists) {
      res.status(400).send("Student number already exists!");
    }

    const hashPass = await bcrypt.hash(data.password, 12);

    const result = await cloudinary.uploader.upload(file, {
      folder: "student",
    });

    await prisma.student.create({
      data: {
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        age: Number(data.age),
        birth_date: data.birth_date,
        gender: data.gender,
        religion: data.religion,
        address: {
          create: {
            Street_name: data.address.Street_name,
            baranggay: data.address.baranggay,
            city: data.address.city,
            province: data.address.province,
            region: data.address.region,
            postal_code: data.address.postal_code,
          },
        },
        profile_image: {
          create: {
            image_url: result.public_id,
            secure_url: result.secure_url,
          },
        },
        SubjectsGrades: {
          create: {
            FirstYearGrades: {
              create: {
                year: "FIRST YEAR",
                semester_grades: {
                  createMany: {
                    data: [
                      {
                        semester: "FIRST",
                      },
                      {
                        semester: "SECOND",
                      },
                    ],
                  },
                },
              },
            },
            SecondYearGrades: {
              create: {
                year: "SECOND YEAR",
                semester_grades: {
                  createMany: {
                    data: [
                      {
                        semester: "FIRST",
                      },
                      {
                        semester: "SECOND",
                      },
                    ],
                  },
                },
              },
            },
            ThirdYearGrades: {
              create: {
                year: "THIRD YEAR",
                semester_grades: {
                  createMany: {
                    data: [
                      {
                        semester: "FIRST",
                      },
                      {
                        semester: "SECOND",
                      },
                    ],
                  },
                },
              },
            },
            FourthYearGrades: {
              create: {
                year: "FOURTH YEAR",
                semester_grades: {
                  createMany: {
                    data: [
                      {
                        semester: "FIRST",
                      },
                      {
                        semester: "SECOND",
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        contact_number: data.contact_number,
        email: data.email,
        password: hashPass,
        student_number: data.student_number,
        school_college: data.school_college,
        school_course: data.school_course,
        school_section: data.school_section,
        school_year: data.school_year,
        type: data.type,
      },
    });

    res.status(200).send("Registered successfully!");
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
  const foundUser = await prisma.student.findFirst({
    where: {
      refreshToken: refreshToken,
    },
  });

  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
    return res.sendStatus(204);
  }

  //* Delete refreshToken in db
  await prisma.student.update({
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
