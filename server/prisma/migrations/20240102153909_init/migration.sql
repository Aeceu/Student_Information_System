/*
  Warnings:

  - Added the required column `email` to the `admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `admin` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;