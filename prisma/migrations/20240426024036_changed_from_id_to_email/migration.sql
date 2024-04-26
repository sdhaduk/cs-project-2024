/*
  Warnings:

  - You are about to drop the column `authorId` on the `Request` table. All the data in the column will be lost.
  - You are about to drop the column `donorId` on the `Request` table. All the data in the column will be lost.
  - Added the required column `authorEmail` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_donorId_fkey";

-- AlterTable
ALTER TABLE "Request" DROP COLUMN "authorId",
DROP COLUMN "donorId",
ADD COLUMN     "authorEmail" TEXT NOT NULL,
ADD COLUMN     "donorEmail" TEXT;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_authorEmail_fkey" FOREIGN KEY ("authorEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_donorEmail_fkey" FOREIGN KEY ("donorEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
