-- AlterTable
ALTER TABLE "Request" ADD COLUMN     "donorId" INTEGER;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
