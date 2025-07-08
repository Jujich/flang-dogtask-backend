/*
  Warnings:

  - Added the required column `likes` to the `DogCard` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DogCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imageUrl" TEXT NOT NULL,
    "likes" INTEGER NOT NULL
);
INSERT INTO "new_DogCard" ("id", "imageUrl") SELECT "id", "imageUrl" FROM "DogCard";
DROP TABLE "DogCard";
ALTER TABLE "new_DogCard" RENAME TO "DogCard";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
