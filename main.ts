import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: The loading bar is lying to you. It is 10% code, 90% theatre. Use this time to hydrate, stretch, and forgive the developer — he is also staring at a loading bar.";

// program/v1: write the single-line tip deterministically to entry.txt.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), TIP, { encoding: "utf8" });
