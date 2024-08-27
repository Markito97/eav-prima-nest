/*
  Warnings:

  - Added the required column `name` to the `AttributeType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AttributeType" ADD COLUMN     "name" TEXT NOT NULL;
