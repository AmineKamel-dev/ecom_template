/*
  Warnings:

  - You are about to drop the column `CartID` on the `CartItem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cartID,productID]` on the table `CartItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cartID` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."CartItem" DROP CONSTRAINT "CartItem_CartID_fkey";

-- DropIndex
DROP INDEX "public"."CartItem_CartID_productID_key";

-- AlterTable
ALTER TABLE "public"."CartItem" DROP COLUMN "CartID",
ADD COLUMN     "cartID" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_cartID_productID_key" ON "public"."CartItem"("cartID", "productID");

-- AddForeignKey
ALTER TABLE "public"."CartItem" ADD CONSTRAINT "CartItem_cartID_fkey" FOREIGN KEY ("cartID") REFERENCES "public"."Cart"("id") ON DELETE CASCADE ON UPDATE CASCADE;
