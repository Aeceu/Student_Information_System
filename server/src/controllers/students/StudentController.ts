import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { TStudent, TUpdateStudent } from "../../student.type";
import cloudinary from "../../utils/cloudinary";

const prisma = new PrismaClient();

//TODO: Get student by id
export const getStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const student: TStudent | null = await prisma.student.findFirst({
      where: {
        id,
      },
      include: {
        address: true,
        profile_image: true,
        emergency: true,
      },
    });
    if (student) {
      delete student["password"];
      delete student["refreshToken"];
    }
    res.status(200).json(student);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

//TODO: Get the counts of all students each year
export const getStudentsCountsByYear = async (req: Request, res: Response) => {
  try {
    const first_year = await prisma.student.findMany({
      where: {
        school_year: "1st Year",
      },
    });
    const second_year = await prisma.student.findMany({
      where: {
        school_year: "2nd Year",
      },
    });
    const third_year = await prisma.student.findMany({
      where: {
        school_year: "3rd Year",
      },
    });
    const fourth_year = await prisma.student.findMany({
      where: {
        school_year: "4th Year",
      },
    });

    res.status(200).json([
      {
        name: "1st Year",
        total: first_year.length,
      },
      {
        name: "2nd Year",
        total: second_year.length,
      },
      {
        name: "3rd Year",
        total: third_year.length,
      },
      {
        name: "4th Year",
        total: fourth_year.length,
      },
    ]);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//TODO: Get the counts of all irregular and regullar students
export const getCountsOfStudentType = async (req: Request, res: Response) => {
  try {
    const regular = await prisma.student.findMany({
      where: {
        type: "REGULAR",
      },
    });

    const irregular = await prisma.student.findMany({
      where: {
        type: "IRREGULAR",
      },
    });

    res.status(200).json([
      { name: "Regular", value: regular.length },
      { name: "Irregular", value: irregular.length },
    ]);
  } catch (error) {
    res.status(50).json(error);
  }
};

//TODO: Get all students by School Year
export const getAllStudentBySchoolYear = async (
  req: Request,
  res: Response
) => {
  try {
    const year = req.params.year;

    const students = await prisma.student.findMany({
      where: {
        school_year: year,
      },
    });
    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//TODO: Get all students by student number
export const getAllStudentsByStudentNumber = async (
  req: Request,
  res: Response
) => {
  try {
    const { search } = req.body;

    const students = await prisma.student.findMany({
      where: {
        student_number: search,
      },
      select: {
        id: true,
        student_number: true,
        first_name: true,
        middle_name: true,
        last_name: true,
        age: true,
        birth_date: true,
        address: true,
        emergency: true,
        contact_number: true,
        gender: true,
        religion: true,
        email: true,
        role: true,
        type: true,
        school_college: true,
        school_course: true,
        school_section: true,
        school_year: true,
        profile_image: true,
      },
    });
    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

//TODO: Get all the students
export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await prisma.student.findMany({
      select: {
        id: true,
        student_number: true,
        first_name: true,
        middle_name: true,
        last_name: true,
        school_year: true,
        type: true,
      },
    });

    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

//TODO: Update student's information (the informations the student can only edit)
export const updateStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { data }: TUpdateStudent = req.body;

    const student: TStudent | null = await prisma.student.update({
      where: {
        id,
      },
      include: {
        address: true,
        emergency: true,
      },
      data: {
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        age: data.age,
        contact_number: data.contact_number,
        birth_date: data.birth_date,
        gender: data.gender,
        religion: data.religion,
        address: {
          update: {
            Street_name: data.address.Street_name,
            baranggay: data.address.baranggay,
            city: data.address.city,
            region: data.address.region,
            postal_code: data.address.postal_code,
          },
        },
        emergency: {
          update: {
            name: data.emergency.name,
            contact_number: data.emergency.contact_number,
            relation: data.emergency.relation,
          },
        },
      },
    });

    if (student) {
      delete student["password"];
      delete student["refreshToken"];
    }
    res.status(200).json(student);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

//TODO: Delete student
export const deleteStudentById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const student = await prisma.student.delete({
      where: {
        id,
      },
      include: {
        profile_image: true,
      },
    });

    if (student.profile_image?.image_url) {
      await cloudinary.uploader.destroy(student.profile_image?.image_url);
    }

    res.status(200).send("Student account deleted successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
