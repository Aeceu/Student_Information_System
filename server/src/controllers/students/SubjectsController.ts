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
        professor: data.professor,
        studentId: id,
      },
    });
    res.status(200).json("New subject enrolled!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//TODO: Delete one subject from student
export const deleteStudentSubject = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await prisma.subjectsEnrolled.delete({
      where: {
        id,
      },
    });
    res.status(200).json("Student subject deleted successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//TODO: Update the grades
export const updateGrades = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const grade = req.body;

    await prisma.subjectsEnrolled.update({
      where: {
        id,
      },
      data: {
        grade,
      },
    });

    res.status(200).json("Grade updated successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//TODO: Update the subjectsEnrolled information
export const updateSubjectEnrolled = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { data }: TAddNewSubjectToStudent = req.body;

    const updatedSubject = await prisma.subjectsEnrolled.update({
      where: {
        id,
      },
      data: {
        code: data.code,
        subject_name: data.subject_name,
        units: data.units,
        grade: data.grade,
        professor: data.professor,
      },
    });
    res.status(200).json({
      message: "Subject updated!",
      updatedSubject,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
