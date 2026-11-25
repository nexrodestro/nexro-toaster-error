// Toaster error message: deadpan corporate voice, one line.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "E02: Free trial ended. Browning is now a premium feature.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
