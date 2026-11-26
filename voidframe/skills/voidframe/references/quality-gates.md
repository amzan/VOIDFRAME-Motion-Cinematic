# Quality gates (no invented pass results)

Gate 0: Structural preflight. Run validator, inspect shot continuity, FPS, total duration and expected deliverables. Fix errors.
Gate 1: Art. Inspect style frames and character turnarounds for consistent blank face, silhouette, palette, lighting direction, original identity and scene geography. Any visible eyes/mouth or lookalike reference character is an immediate fail.
Gate 2: Motion. View motion proof or rendered animatic at speed and frame-step contact/action beats. Inspect articulation, foot planting, pose readability, arcs, weight, continuity, camera motion and absence of unintended collisions/jitter. If playback unavailable, mark NOT VERIFIED, not PASS.
Gate 3: Edit. Check story comprehension, hook and payoff, pacing, cut continuity, caption safe zones and actual narration sync. Confirm audio asset rights and no clipping. If audio absent, report silent status.
Gate 4: Export. Inspect actual rendered output with ffprobe and visual sample frames. Ensure intended dimensions, FPS, duration, no missing frames, no placeholders, no unintended blank frames or malformed text. Review each requested aspect ratio separately. Final deliverable status is conditional on real evidence.

## Review rubric (0–5 each)
1. Character design and silhouette
2. Facial rule compliance (hard gate; any violation = fail)
3. Posing and body acting
4. Animation timing and weight
5. Composition and camera
6. Environment depth and lighting
7. Narrative clarity and pacing
8. Editing and transitions
9. Audio and synchronization (N/A if deliberately silent proof)
10. Technical export quality

Target average >= 4/5 across verified applicable criteria, no verified criterion < 3, and no hard-gate failure. Do not invent scores for unverified criteria; N/V is not pass. Review report should list artifact path, tested frames/time ranges, evidence, actual issues, fixes made, status and remaining human review. A static-frame inspection cannot validate the entire animation.
