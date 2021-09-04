-- CreateTable
CREATE TABLE "Dishes" (
    "id" TEXT NOT NULL,
    "author" TEXT DEFAULT E'Unknown',
    "name" TEXT NOT NULL,
    "description" TEXT DEFAULT E'A Very Special Dish',
    "image_url" TEXT DEFAULT E'https://vaya.in/recipes/wp-content/themes/neptune-by-osetin/assets/img/placeholder.jpg',
    "ingredients" TEXT[],
    "procedure" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dishes.name_unique" ON "Dishes"("name");
