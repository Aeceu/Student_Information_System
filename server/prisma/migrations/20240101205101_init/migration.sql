/*
  Warnings:

  - You are about to drop the column `student_id` on the `subjectsenrolled` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `subjectsenrolled` DROP FOREIGN KEY `SubjectsEnrolled_student_id_fkey`;

-- AlterTable
ALTER TABLE `subjectsenrolled` DROP COLUMN `student_id`,
    ADD COLUMN `studentId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `SubjectsEnrolled` ADD CONSTRAINT `SubjectsEnrolled_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
