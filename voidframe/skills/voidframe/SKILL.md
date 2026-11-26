---
name: voidframe
description: Produce original cinematic faceless 2D and 2.5D storytelling animation, story-to-video, motion graphics, character acting, storyboard, animatics, YouTube videos, TikTok and Shorts with Motion Canvas and TypeScript. Use for motion proofs, full episodes, editing, platform adaptations or animation quality review. Never depict eyes or mouths on characters.
compatibility: Any agent supporting Agent Skills or reading Markdown with workspace access. Production requires Node.js 22, npm, Motion Canvas, and a browser for preview/export; Python 3.10+ for optional validators. Network access may be needed to install dependencies.
---
# VOIDFRAME | Portable cinematic animation studio

## Non-negotiables
- Motion Canvas + TypeScript is the only primary animation engine; use the official FFmpeg exporter or PNG sequence + external FFmpeg for encoding. No Blender, Godot or Remotion requirement. Do not invent a render CLI or promise unattended export.
- All visible characters have smooth blank faces: no eyes, mouths, eye slots, glowing dots, implied expressions, or lip sync. Default no eyebrows or noses. Includes crowds, portraits, masks and reflections. Communicate through gesture, costume, silhouette, staging, and narration.
- Original assets and choreography. Use references as broad inspiration, never trace characters, shots, designs, music or logos. Track rights, attribution, and consent. Do not retrieve external assets or publish without permission.
- Epic means motivated scale, rhythm, dramatic composition and expressive acting, not constant effects. No slideshow, rigid sticker motion, generic icons as final art, random neon, unmotivated shake, excessive typography or placeholders. No need for constant action; let emotional moments breathe.
- Stay inside the chosen workspace; preserve existing files, never overwrite an approved output. No destructive commands, hidden network transfers or unapproved installations. Never claim renders or QC passed without evidence.

## Progressive loading
1. Always read [art direction](references/art-direction.md) and [production](references/production.md).
2. For implementation read [Motion Canvas](references/motion-canvas.md) and [character system](references/character-system.md).
3. For editing/audio/export read [delivery](references/delivery.md). Before delivery read [quality gates](references/quality-gates.md).
4. [Examples](references/examples.md) provides prompts. Use `assets/templates/` for manifests and ledgers. Copy `assets/starter/` into a NEW project; do not edit the installed skill itself.

## Operating modes
- design-only: story, storyboard, style frames when available, shot plan; no render claim.
- motion-proof (default for new visual style): 5–10 s test of actual articulation, light, depth and contact.
- review-first: stop after animatic for approval, before costly full render.
- full-production: execute feasible stages through QC, no approval pauses except permissions/blocked tools.
- adapt: recompose approved source for another aspect ratio; preserve timing and identity.
- review: evidence-based shot critique, apply only requested edits.

## Production contract
1. Inspect tools, existing project and permissions. If no shell/browser, deliver source/plans and exact local steps. Check runtime and installed packages. Ask before installs, paid operations or external services. Use the language requested by the user; otherwise match the language of the brief. Repository documentation and examples are in English. Defaults: 24 fps; 30–60 s vertical; 16:9 long-form, duration determined by brief. Record decisions.
2. Direct story: hook, development, turn, payoff; actual timed narration; fact-check nonfiction and label reconstructions. If audio missing, prepare silent proof and cues; never pretend to have TTS or audio files.
3. Direct art: original character bible (shape, turnarounds, dimensions, outfit, palette), environments with depth, color script, style frames, asset ledger. If drawing tools unavailable, use custom vector paths and explicitly label proxies.
4. Storyboard: half-open frame ranges, narrative beat, staging, camera, key poses, transition, sound, asset IDs. Run `python scripts/validate_episode.py <episode.json>` from the skill folder (or use absolute paths). This checks structure only.
5. Implement: copy starter project or extend existing Motion Canvas project. Use deterministic generators/signals, nested nodes for limbs, pose swaps, silhouette and contact checks. Stage foreground/midground/background; use camera or world transforms, actual time-based motion. Create a motion proof; inspect motion at speed and key poses. Fix flaws before scaling.
6. Build episode as independently editable shots/scenes. Anchor actions to frame counts or measured narration markers. Use actual rendering UI or verified automation capability. Do not render via guessed commands. Render low-res animatic, inspect cuts, pose readability, safe areas, timing, audio. If only stills are available, mark motion NOT VERIFIED.
7. Render each requested aspect ratio independently. Use H.264 MP4 where supported; otherwise PNG frames and documented FFmpeg conversion. Inspect actual media metadata, audio sync, faces and frames. Keep rights ledger, source and proof of review.
8. Deliver files that exist with exact paths, QC status and remaining issues. An unfinished preview is not a final video. If blocked, explain what was completed and the smallest next action.

## Output layout
Episode-local `brief/`, `assets/`, `src/`, `preview/`, `renders/`, `qc/`; editable Motion Canvas project, `episode.json`, shot plan, character bible, color script, asset ledger, cue sheet, render settings, media and QC report as applicable. Never write episode outputs into installed skill. Use file versions and relative paths. Skill instructions and demo source are not equivalent to a finished film.
