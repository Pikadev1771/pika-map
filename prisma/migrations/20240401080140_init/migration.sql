/*
  Warnings:

  - You are about to drop the column `foodCertigyName` on the `Store` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Store" DROP COLUMN "foodCertigyName",
ADD COLUMN     "foodCertifyName" TEXT;
