#!/usr/bin/env bash
# Reviews raw footage: prints each clip's length/size and saves one frame every
# half-second into out/frames/<clip>/, so shots can be picked from stills.
# Uses the ffmpeg/ffprobe binaries bundled with Remotion (no system install needed).
set -euo pipefail
cd "$(dirname "$0")/.."

shopt -s nullglob nocaseglob
for clip in public/footage/*.{mp4,mov,m4v}; do
  name="$(basename "${clip%.*}")"
  echo "== $clip"
  npx remotion ffprobe -v error -select_streams v:0 \
    -show_entries stream=width,height,r_frame_rate:format=duration \
    -of default=noprint_wrappers=1 "$clip"
  mkdir -p "out/frames/$name"
  npx remotion ffmpeg -v error -y -i "$clip" -vf "fps=2,scale=360:-2" \
    "out/frames/$name/%04d.jpg"
done
