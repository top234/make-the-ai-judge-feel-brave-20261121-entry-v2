import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The potter's wheel turns slowly. The clay rises under his hands, falls, rises again. His thumbs press, and the clay answers. The pot will take the shape it takes, and no other. When it is done, it will hold water. Until then, it only needs his hands.";

const len = [...TEXT].length;
if (len < 1 || len > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry must be 1-280 code points, got ${len}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
