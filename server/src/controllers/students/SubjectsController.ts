import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {
  TAddNewSubjectAndGradesInSem,
  TAddNewYearAndSem,
} from "../../student.type";

const prisma = new PrismaClient();

//TODO: Get the student's subjects by ID
export const getStudentSubjects = async (req: Request, res: Response) => {
  try {
    const id = req.params.id; // id of the student

    const student_subjects = await prisma.subjectsGrades.findFirst({
      where: {
        studentId: id,
      },
      include: {
        FirstYearGrades: {
          include: {
            semester_grades: {
              select: {
                id: true,
                semester: true,
                subjects_enrolled: true,
              },
            },
          },
        },
        SecondYearGrades: {
          include: {
            semester_grades: {
              include: {
                subjects_enrolled: true,
                FirstYearGrades: false,
                ThirdYearGrades: false,
                FourthYearGrades: false,
              },
            },
          },
        },
        ThirdYearGrades: {
          include: {
            semester_grades: {
              include: {
                subjects_enrolled: true,
                FirstYearGrades: false,
                SecondYearGrades: false,
                FourthYearGrades: false,
              },
            },
          },
        },
        FourthYearGrades: {
          include: {
            semester_grades: {
              include: {
                subjects_enrolled: true,
                FirstYearGrades: false,
                SecondYearGrades: false,
                FourthYearGrades: false,
              },
            },
          },
        },
      },
    });

    res.status(200).json(student_subjects);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//TODO: Add enrolled subject to the student
export const AddSubjectEnrolled = async (req: Request, res: Response) => {
  try {
    const id = req.params.id; // ID of the semester (first or second)
    const { data }: TAddNewSubjectAndGradesInSem = req.body;

    await prisma.subjectsEnrolled.create({
      data: {
        code: data.code,
        subject_name: data.subject_name,
        units: data.units,
        grade: data.grade,
        professor: data.professor,
        semesterGradesId: id,
      },
    });

    res.status(200).json("New subject added!");
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
};

// //TODO: Delete one subject from student
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
    const id = req.params.id; // id of the subject
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
    const { data }: TAddNewSubjectAndGradesInSem = req.body;

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
