/*
  Warnings:

  - Added the required column `userId` to the `Qutoe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Qutoe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Qutoe" ("id", "text") SELECT "id", "text" FROM "Qutoe";
DROP TABLE "Qutoe";
ALTER TABLE "new_Qutoe" RENAME TO "Qutoe";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
