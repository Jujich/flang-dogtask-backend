-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DogCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imageUrl" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_DogCard" ("id", "imageUrl", "likes") SELECT "id", "imageUrl", "likes" FROM "DogCard";
DROP TABLE "DogCard";
ALTER TABLE "new_DogCard" RENAME TO "DogCard";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
