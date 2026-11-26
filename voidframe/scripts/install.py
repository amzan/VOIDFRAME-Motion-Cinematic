#!/usr/bin/env python3
"""Copy portable skill to the selected workspace; refuse overwrites."""
import argparse, shutil
from pathlib import Path
p=argparse.ArgumentParser(description=__doc__)
p.add_argument('--agent',choices=['antigravity','codex','claude','cursor','gemini','copilot','generic'],default='antigravity')
p.add_argument('--workspace',type=Path,default=Path.cwd());p.add_argument('--dest',type=Path,help='Explicit parent skills directory, overrides agent path')
a=p.parse_args(); paths={'antigravity':'.agents/skills','codex':'.agents/skills','claude':'.claude/skills','cursor':'.cursor/skills','gemini':'.gemini/skills','copilot':'.github/skills','generic':'.agents/skills'}
source=Path(__file__).resolve().parents[1]/'skills'/'voidframe'; dest=(a.dest or a.workspace/paths[a.agent]).resolve()/'voidframe'
if dest.exists(): p.exit(2,f'Refusing to overwrite {dest}; back up or choose another destination.\n')
dest.parent.mkdir(parents=True,exist_ok=True);shutil.copytree(source,dest);print(dest)
