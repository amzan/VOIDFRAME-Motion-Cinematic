# VOIDFRAME
**Portable cinematic animation skill for AI coding agents.**

Original faceless storytelling animation for YouTube, TikTok and Shorts. Motion Canvas + TypeScript + official FFmpeg exporter. No eyes, no mouths, no lip sync. No Blender, Godot or Remotion dependency. This is a reusable skill and starter, not a turnkey text-to-film AI model.

## Quick start
Clone or extract this repository. Open a new production workspace. From the repository run:

```sh
python scripts/install.py --agent antigravity --workspace /path/to/production-workspace
```

Windows: `python scripts/install.py --agent antigravity --workspace "D:/Animation/episode-01"`. Replace path with your own. The installer only copies files and refuses to overwrite. For another agent select `codex`, `claude`, `cursor`, `gemini`, `copilot`, or `generic`; use `--dest` to override the parent skills folder. Workspace locations: `.agents/skills/` (Antigravity/Codex), `.claude/skills/`, `.cursor/skills/`, `.gemini/skills/`, `.github/skills/`. Confirm discovery in your installed agent version; these are common project paths, not a guarantee across all versions. For any agent without native skill discovery, explicitly instruct it to read `skills/voidframe/SKILL.md` and linked resources. Restart/reload agent if needed. Native invocation varies; use `/voidframe` where supported or plain text "Use VOIDFRAME skill".

## First request
> Use VOIDFRAME, motion-proof mode. Create an original eight-second 2D cinematic animation in which a traveler hesitates before a door, then warm light appears. No eyes or mouths on any character. Use English narration if needed; a silent proof is acceptable. Use Motion Canvas, 24 fps, 16:9. Inspect tools, copy the starter into a new project, build actual articulated character motion and layered scene. Do not install dependencies without approval. Deliver source, actual preview if possible, and evidence-based QC.

## Starter project
Copy `skills/voidframe/assets/starter/` to an episode workspace. Install Node 22 and approve dependency installation. Run `npm install`, `npm test`, `npm run check`, `npm start` in the copied project. Editor typically opens at http://localhost:9000. Select full range, 24 fps, 1920×1080 and FFmpeg exporter in Video Settings; click Render. For vertical, recompose first and set 1080×1920. `npm run build` is a code build, not video rendering. See the starter README for limitations and actual render steps.

## Repository map
- `skills/voidframe/SKILL.md`: single portable entrypoint.
- `references/`: art, production, implementation, rigging, delivery, QC and examples.
- `assets/templates/`: manifests, shot plan, asset ledger, audio cues, character bible, QC.
- `assets/starter/`: minimal Motion Canvas scene, cutout rig, pose library and pure IK utility, tests.
- `scripts/install.py`: project-local portable installer.
- `.github/workflows/ci.yml`: structural tests and dependency-backed build; no automated visual rendering.

## Publish to GitHub
Create an empty repository (private first recommended), extract ZIP, enter the `voidframe` directory and run:

```sh
git init
git add .
git commit -m "Initial commit: VOIDFRAME"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/voidframe.git
git push -u origin main
```

Replace username and repo name. Enable Actions, inspect first CI run, fix dependency/build issues if any, generate and commit lockfile after successful install. Publish a GitHub release only after actual preview and QC; GitHub Pages is not needed for skill distribution. Keep production assets private. This package does not include an open-source license selection: choose and add a LICENSE before public redistribution (MIT is a reasonable permissive option, if you own the rights). External dependencies have their own licenses; see upstream. No reference artwork or music is bundled.

## Verification status at packaging
Local Python structural/installer tests (3) and Node pure pose/IK tests (3) passed. These tests also run in CI. Registry access was unavailable during packaging: no dependency install, TypeScript integration check, Vite build, browser preview or MP4 render was verified. First CI run is a required validation step. Starter artwork is a technical proxy; no claim of Gildedguy-level animation. Agent-specific discovery and runtime have not been tested on user machines.

## Documentation
[Agent Skills spec](https://agentskills.io/specification) · [Motion Canvas](https://motion-canvas.io/docs/quickstart/) · [Video exporter](https://motion-canvas.io/docs/rendering/video/) · [Antigravity](https://antigravity.google/docs/skills/) · [Codex](https://developers.openai.com/api/reference/cli).
