# Production protocol

## Brief and timing
Record platform, audience, duration, format, language, tone, facts vs fiction, narration source, music/SFX rights and Motion Canvas version. A 30–60 s vertical story may start with 0–3 s hook, 3–15 s setup, 15–40 s escalation and final payoff; adapt to story. Long YouTube episodes need coherent acts, character motivation and scene rhythm rather than compulsory cuts every few seconds. Measure voice-over when available. Never equate narration word count to actual measured duration. Use timestamps or frame indices and half-open shot ranges [start,end). At 24 fps, 45 s = 1080 frames.

## Storyboard to actual animation
For each shot record: ID; frame range; narrative beat; composition; camera; initial/key/final poses; movement arcs; depth layers; transitions; voice and sound cues; assets; and check status. Establish scene geography and continuity. Draw style frames and rig turnarounds before animation; for motion proof select a scene that tests acting, not merely typography. Animate key poses first, then inbetweens and secondary motion. Render first/center/end plus key action frames; inspect a contact sheet and motion playback when possible. Compare against intended story beats. Fix shot-specific issues, not generic global filters.

## Platform delivery defaults
- YouTube long: 1920x1080, 16:9, 24 fps progressive.
- Shorts / TikTok: 1080x1920, 9:16, 24 fps progressive; 30 fps when requested or appropriate. Use platform-specific compositions; re-stage subject, captions and environment rather than center cropping.
- Safe-area planning: for vertical preview reserve about 10% sides, 15% top and 25% bottom for critical text/action as a conservative working template, then verify against current platform UI. For horizontal use at least 5% edge margin. These are design defaults, not official platform guarantees.
- MP4 H.264, yuv420p, AAC 48 kHz if audio is present, CRF 18–21 or equivalent quality. Keep master and separate caption files (SRT) if narration exists. Audio target roughly -14 LUFS integrated / <= -1 dBTP when measurable; adjust for editorial dynamics. Preserve music and dialogue balance; no clipping.

## Sound direction
Narration is the spine. Use room tone, purposeful Foley, texture, musical dynamics and brief silence. Assign cues to frames. Do not generate or copy copyrighted soundtrack from references. Keep music underneath voice; use measured loudness where tools exist. With no approved audio, export silent proof and explicit sound cue sheet.

## Storage
Each episode isolated in a new directory: brief/, assets/characters/, assets/environments/, assets/audio/, src/, preview/, renders/, qc/. Store tool versions and commands in QC, asset ledger (source, author, license/permission, location, modifications), and generation prompts/seeds if applicable. Use offline/local asset paths during render. Preserve source and do not overwrite user-approved exports; version new renders.
