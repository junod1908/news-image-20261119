// news-image-20261119 — make.fun entry.
// The program copies the pre-rendered news summary image (entry.png,
// JPEG bytes under a .png name, as the competition allows) to the
// output directory as entry.png. The image is 1024 by 1024 pixels
// and under the 1 MiB cap. No network, no randomness: every run
// writes the same bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
