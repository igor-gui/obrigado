/*
  Warnings:

  - The `createdAt` column on the `Session` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `token` on the `Session` table. The data in that column could be lost. The data in that column will be cast from `VarChar(36)` to `VarChar(32)`.

*/
-- AlterTable
ALTER TABLE "Session" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "token" SET DATA TYPE VARCHAR(32);

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;
