# Reels

Instagram reel templates built with [Remotion](https://www.remotion.dev).
Output is 1080×1920 (9:16) at 30 fps.

## Setup

```bash
cd reels
npm install
```

## Making a reel

1. Put raw clips in `public/footage/` (and an optional track in `public/music/`).
   These folders are git-ignored, so footage is never committed.
2. `./scripts/contact-sheets.sh` prints each clip's length and saves stills
   (2 per second) to `out/frames/` for picking the best moments.
3. Edit `src/edit.json`: the title, the music, and the shot list. Each shot is
   `{ "src": "footage/beach.mp4", "startFrom": 4.5, "duration": 2, "caption": "Nungwi" }`
   (times in seconds). Shots with `"src": null` render as coloured placeholders.
4. Preview with `npm run studio`, or render with `npm run render`
   (writes `out/vacation-reel.mp4`).

The template (`src/VacationReel.tsx`) adds a title card, a slow push-in on each
shot, animated captions and cross-fades between shots.

## Licence note

Remotion is free for individuals and companies with up to 3 employees; larger
companies need a company licence. See https://remotion.dev/license.
