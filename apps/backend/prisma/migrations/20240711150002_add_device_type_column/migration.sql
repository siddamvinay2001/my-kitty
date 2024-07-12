/*
  Warnings:

  - Added the required column `deviceType` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DeviceType" AS ENUM ('PHONE', 'EMAIL');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "deviceType" "DeviceType" NOT NULL;
