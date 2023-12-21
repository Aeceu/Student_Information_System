import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { TAdminUpdateStudentInfo } from "../../admin.type";

const prisma = new PrismaClient();

//TODO: Update the student's information (including the school related information)
export const AdminUpdateStudentInfo = async (req: Request, res: Response) => {
  try {
    const { data }: TAdminUpdateStudentInfo = req.body;

    const student = await prisma.student.update({
      where: {
        student_number: data.student_number,
      },
      include: {
        address: true,
      },
      data: {
        student_number: data.student_number,
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        age: Number(data.age),
        birth_date: data.birth_date,
        contact_number: data.contact_number,
        email: data.email,
        address: {
          update: {
            Street_name: data.address.Street_name,
            baranggay: data.address.baranggay,
            city: data.address.city,
            region: data.address.region,
            postal_code: data.address.postal_code,
          },
        },
        role: data.role,
        type: data.type,
        school_college: data.school_college,
        school_course: data.school_course,
        school_section: data.school_section,
        school_year: data.school_year,
      },
    });

    res.status(200).send(`Student information updated successfully!`);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

//TODO: Delete student
export const AdminDeleteStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await prisma.student.delete({
      where: {
        id,
      },
    });
    res.status(200).send("student deleted successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};