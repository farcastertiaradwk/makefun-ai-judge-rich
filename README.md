# make.fun — ai-judge-rich-01: dead-website rescue plan

[![ai-judge-rich-01](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/c/ai-judge-rich-01)
[![rank](https://make.fun/badge/ai-judge-rich-01/farcastertiaradwk/makefun-ai-judge-rich/rank.svg)](https://make.fun/c/ai-judge-rich-01)
[![reward](https://make.fun/badge/ai-judge-rich-01/farcastertiaradwk/makefun-ai-judge-rich/reward.svg)](https://make.fun/c/ai-judge-rich-01)

Entry for [ai-judge-rich-01](https://make.fun/c/ai-judge-rich-01) — "Make the AI judge rich".

`main.ts` (Node 22, stdlib only, deterministic) writes one 984-character plan
to `/output/entry.txt`: rescue local businesses whose website died — scan
Google Maps listings, flag the dead sites, build a live one-page replacement
from each business's own listing, and email the owner a $149 keep-it offer.
Same build-first, charge-to-keep skeleton as the strongest house plans, aimed
at a buyer with an acute, visible defect only an agent that checks liveness
can find.

Run it: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`
