/*
  Warnings:

  - You are about to drop the column `address` on the `student` table. All the data in the column will be lost.
  - Added the required column `addressId` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `student` DROP COLUMN `address`,
    ADD COLUMN `addressId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
