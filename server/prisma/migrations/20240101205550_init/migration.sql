-- DropForeignKey
ALTER TABLE `subjectsenrolled` DROP FOREIGN KEY `SubjectsEnrolled_studentId_fkey`;

-- AddForeignKey
ALTER TABLE `SubjectsEnrolled` ADD CONSTRAINT `SubjectsEnrolled_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
