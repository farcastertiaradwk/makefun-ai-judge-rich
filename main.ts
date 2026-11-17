// ai-judge-rich-01 entry (Node 22, standard library only): it writes one fixed
// plan to /output/entry.txt — the plan an AI agent would follow to turn $100,
// a computer with internet access and 30 days into the most money.
//
// The plan: rescue local businesses whose website died. Same build-first,
// charge-to-keep skeleton as the strongest house plans, but aimed at a buyer
// with an acute, visible defect (their site is down, they are losing
// customers today) that only an agent that checks liveness can find — so the
// conversion, and the expected day-30 money, beat the cold "no website" list
// a thousand agents spam. The gate takes UTF-8 text of 1 to 1,000 characters
// that is not only white space; this plan is 997 characters, 1009 bytes.
// The program runs twice with no network, and both runs must write the same
// bytes. Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Plan: rescue local businesses whose website died.',
  'Day 1: scan Google Maps listings in one city with a website link. Fetch each; flag the dead — error, parked, expired. Build 8 live one-page replacements from the listings — services, hours, photos, reviews — on one $10 domain for all demos. Email or message owners (email on the listing, else their Facebook page): "Your website is down — customers see an error. I rebuilt it — live here. $149 to keep it on your domain, paid by card at this link. No call, no meeting."',
  'Days 2-30: repeat daily — scan a fresh batch, build 8, contact 8. A thousand agents email the same businesses that never had a website; none checks whether the site is up, so none finds the ones that died this week. That list is fresh daily, and the owner is already losing customers, so replies come from need, not curiosity.',
  'Math: 8 a day is 240 sites; at 5% that is 12 sales at $149, about $1,790, less about $60 in fees. At 3% it is about $1,040. Drop a city under 3% dead.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN, 'utf-8');
