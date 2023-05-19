/*
  Warnings:

  - Added the required column `constelationId` to the `Star` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Star" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "constelationId" TEXT NOT NULL,
    CONSTRAINT "Star_constelationId_fkey" FOREIGN KEY ("constelationId") REFERENCES "Constellation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Star" ("description", "id", "name") SELECT "description", "id", "name" FROM "Star";
DROP TABLE "Star";
ALTER TABLE "new_Star" RENAME TO "Star";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
