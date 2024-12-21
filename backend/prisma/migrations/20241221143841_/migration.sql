/*
  Warnings:

  - Added the required column `name` to the `RelationType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RelationType" ADD COLUMN     "name" TEXT NOT NULL;
