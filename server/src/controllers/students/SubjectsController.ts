import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { TAddNewSubjectToStudent } from "../../student.type";

const prisma = new PrismaClient();

//TODO: Get the student's subjects by ID
export const getStudentSubjects = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const student_subjects = await prisma.subjectsEnrolled.findMany({
      where: {
        studentId: id,
      },
      include: {},
    });

    res.status(200).json(student_subjects);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//TODO: Add new subjects to student
export const addStudenSubject = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { data }: TAddNewSubjectToStudent = req.body;

    const newSub = await prisma.subjectsEnrolled.create({
      data: {
        code: data.code,
        subject_name: data.subject_name,
        units: data.units,
        studentId: id,
      },
    });
    res.status(200).json(newSub);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//TODO: Delete one subject from student
export const deleteStudentSubject = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    res.status(200).json("Student subject deleted successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
