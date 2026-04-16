-- CreateTable
CREATE TABLE "RecommendedProduct" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RecommendedProduct_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RecommendedProduct_productId_key" ON "RecommendedProduct"("productId");

-- AddForeignKey
ALTER TABLE "RecommendedProduct" ADD CONSTRAINT "RecommendedProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
