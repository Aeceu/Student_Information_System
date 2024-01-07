-- CreateTable
CREATE TABLE `Student` (
    `id` VARCHAR(191) NOT NULL,
    `student_number` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `middle_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `birth_date` VARCHAR(191) NOT NULL,
    `gender` ENUM('MALE', 'FEMALE', 'GAY', 'LESBIAN', 'UNKNOWN') NOT NULL,
    `religion` VARCHAR(191) NOT NULL,
    `contact_number` VARCHAR(191) NOT NULL,
    `refreshToken` TEXT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `school_year` VARCHAR(191) NULL,
    `school_college` VARCHAR(191) NULL,
    `school_course` VARCHAR(191) NULL,
    `school_section` VARCHAR(191) NULL,
    `role` ENUM('STUDENT', 'ADMIN', 'PROFESSOR') NOT NULL DEFAULT 'STUDENT',
    `type` ENUM('REGULAR', 'IRREGULAR') NOT NULL DEFAULT 'REGULAR',

    UNIQUE INDEX `Student_student_number_key`(`student_number`),
    UNIQUE INDEX `Student_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Address` (
    `id` VARCHAR(191) NOT NULL,
    `Street_name` VARCHAR(191) NOT NULL,
    `baranggay` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `region` VARCHAR(191) NOT NULL,
    `province` VARCHAR(191) NOT NULL,
    `postal_code` VARCHAR(191) NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Address_student_id_key`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profile_Image` (
    `id` VARCHAR(191) NOT NULL,
    `secure_url` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `student_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Profile_Image_student_id_key`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Emergency` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `contact_number` VARCHAR(191) NOT NULL,
    `relation` VARCHAR(191) NOT NULL,
    `studentId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Emergency_studentId_key`(`studentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Professor` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `profile_ImageId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubjectsGrades` (
    `id` VARCHAR(191) NOT NULL,
    `studentId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FirstYearGrades` (
    `id` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL DEFAULT 'FIRST YEAR',
    `subjectsGradesId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SecondYearGrades` (
    `id` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL DEFAULT 'SECOND YEAR',
    `subjectsGradesId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ThirdYearGrades` (
    `id` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL DEFAULT 'THIRD YEAR',
    `subjectsGradesId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FourthYearGrades` (
    `id` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL DEFAULT 'FOURTH YEAR',
    `subjectsGradesId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SemesterGrades` (
    `id` VARCHAR(191) NOT NULL,
    `semester` ENUM('FIRST', 'SECOND') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `firstYearGradesId` VARCHAR(191) NULL,
    `secondYearGradesId` VARCHAR(191) NULL,
    `thirdYearGradesId` VARCHAR(191) NULL,
    `fourthYearGradesId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubjectsEnrolled` (
    `id` VARCHAR(191) NOT NULL,
    `grade` DOUBLE NULL,
    `code` VARCHAR(191) NOT NULL,
    `subject_name` VARCHAR(191) NOT NULL,
    `units` INTEGER NOT NULL,
    `professor` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `semesterGradesId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admin` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `refreshToken` TEXT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'ADMIN',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Profile_Image` ADD CONSTRAINT `Profile_Image_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emergency` ADD CONSTRAINT `Emergency_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Professor` ADD CONSTRAINT `Professor_profile_ImageId_fkey` FOREIGN KEY (`profile_ImageId`) REFERENCES `Profile_Image`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubjectsGrades` ADD CONSTRAINT `SubjectsGrades_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FirstYearGrades` ADD CONSTRAINT `FirstYearGrades_subjectsGradesId_fkey` FOREIGN KEY (`subjectsGradesId`) REFERENCES `SubjectsGrades`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SecondYearGrades` ADD CONSTRAINT `SecondYearGrades_subjectsGradesId_fkey` FOREIGN KEY (`subjectsGradesId`) REFERENCES `SubjectsGrades`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ThirdYearGrades` ADD CONSTRAINT `ThirdYearGrades_subjectsGradesId_fkey` FOREIGN KEY (`subjectsGradesId`) REFERENCES `SubjectsGrades`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FourthYearGrades` ADD CONSTRAINT `FourthYearGrades_subjectsGradesId_fkey` FOREIGN KEY (`subjectsGradesId`) REFERENCES `SubjectsGrades`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SemesterGrades` ADD CONSTRAINT `SemesterGrades_firstYearGradesId_fkey` FOREIGN KEY (`firstYearGradesId`) REFERENCES `FirstYearGrades`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SemesterGrades` ADD CONSTRAINT `SemesterGrades_secondYearGradesId_fkey` FOREIGN KEY (`secondYearGradesId`) REFERENCES `SecondYearGrades`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SemesterGrades` ADD CONSTRAINT `SemesterGrades_thirdYearGradesId_fkey` FOREIGN KEY (`thirdYearGradesId`) REFERENCES `ThirdYearGrades`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SemesterGrades` ADD CONSTRAINT `SemesterGrades_fourthYearGradesId_fkey` FOREIGN KEY (`fourthYearGradesId`) REFERENCES `FourthYearGrades`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubjectsEnrolled` ADD CONSTRAINT `SubjectsEnrolled_semesterGradesId_fkey` FOREIGN KEY (`semesterGradesId`) REFERENCES `SemesterGrades`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
