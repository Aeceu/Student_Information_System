export type TStudent = {
  id: string;
  student_number: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  age: number;
  birth_date: string;
  contact_number: string;
  address: {
    Street_name: string;
    baranggay: string;
    city: string;
    region: string;
    province: string;
    postal_code: string;
  };
  refreshToken?: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
  school_year: string;
  school_college: string;
  school_course: string;
  school_section: string;
  role: string;
  type: "REGULAR" | "IRREGULAR" | string;
};

export type TUpdateStudent = {
  first_name: string;
  middle_name: string;
  last_name: string;
  age: number;
  birth_date: string;
  address: {
    baranggay: string;
    city: string;
    postal_code: string;
    province: string;
    region: string;
    Street_name: string;
  };
  contact_number: string;
  email: string;
  role: string;
  type: string;
  student_number: string;
  school_college: string;
  school_course: string;
  school_section: string;
  school_year: string;
};
