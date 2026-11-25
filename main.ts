// One-Line Office Jokes — make.fun entry (program/v1, node22).
// Writes exactly one single-line office joke to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: no clock, no randomness, no network, no environment secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 199 characters,
// a single line, and not only whitespace. This line is 106 characters:
// a real office detail (the printer that jams at the worst moment) with
// the laugh landing on the final beat.
const JOKE =
  "Our printer has one rule: it only jams on documents marked urgent, confidential, and due five minutes ago.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
