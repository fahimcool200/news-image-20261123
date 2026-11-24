// News-image entry for make.fun, bounty news-image-20261123 (Node 22, standard library only).
// The entry image is entry.png beside this file: a 1024x1024 front page I drew
// summing up the world's news of Monday 23 November 2026 (COP31, Dymer, markets,
// US House, Indonesia, South Korea). This program copies it to /output/entry.png.
// It runs with no network and writes the same bytes every time.
// v2 (24 Nov 2026): same stories, prettier design — TOP STORY tag, filled globe,
// small icons per story, panel shadows, gold footer rule.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
