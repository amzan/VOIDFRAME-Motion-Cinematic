#!/usr/bin/env python3
"""Validate timeline structure only. Does not inspect actual video or artistic quality."""
import argparse
import json
import sys
from pathlib import Path


def validate(data):
    if not isinstance(data, dict):
        return ['Manifest must be an object.']
    errors = []
    for key in ('fps', 'width', 'height', 'duration_frames'):
        v = data.get(key)
        if type(v) is not int or v <= 0:
            errors.append(f'{key} must be a positive integer.')
    for key in ('width', 'height'):
        v = data.get(key)
        if type(v) is int and v % 2:
            errors.append(f'{key} must be even for yuv420p.')
    shots = data.get('shots')
    if not isinstance(shots, list) or not shots:
        return errors + ['shots must be a nonempty list.']
    cursor = 0
    seen = set()
    for index, shot in enumerate(shots):
        if not isinstance(shot, dict):
            errors.append(f'Shot {index + 1} must be an object.')
            continue
        sid = shot.get('id')
        if not isinstance(sid, str) or not sid.strip() or sid in seen:
            errors.append(f'Shot {index + 1}: missing or duplicate ID.')
        else:
            seen.add(sid)
        start, end = shot.get('start_frame'), shot.get('end_frame')
        if type(start) is not int or type(end) is not int or start < 0 or end <= start:
            errors.append(f'Shot {index + 1}: invalid frame range.')
            continue
        if start != cursor:
            errors.append(f'Shot {index + 1}: gap or overlap (expected start {cursor}, got {start}).')
        cursor = end
        for key in ('beat', 'camera', 'acting'):
            if not isinstance(shot.get(key), str) or not shot[key].strip():
                errors.append(f'Shot {index + 1}: missing {key}.')
    if cursor != data.get('duration_frames'):
        errors.append(f'Timeline ends at frame {cursor}, not duration_frames.')
    return errors


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('manifest', type=Path)
    args = parser.parse_args()
    try:
        data = json.loads(args.manifest.read_text(encoding='utf-8'))
    except (OSError, UnicodeError, json.JSONDecodeError) as exc:
        print(f'FAIL: {exc}', file=sys.stderr)
        return 1
    errors = validate(data)
    if errors:
        print('\n'.join('FAIL: ' + e for e in errors), file=sys.stderr)
        return 1
    print(f'PASS: {len(data["shots"])} shots, {data["duration_frames"]} frames, {data["duration_frames"] / data["fps"]:.2f} s. Structural checks only.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
