import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "You have a stone in your pocket. The river spent a hundred years smoothing it, and never once hurried. It is still there when you reach for it — cool, round, patient. What waits beyond this page can wait a little longer.";

const len = [...TEXT].length;
if (len < 1 || len > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry must be 1-280 code points, got ${len}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
