import {
  AbsoluteFill,
  Audio,
  Easing,
  interpolate,
  OffthreadVideo,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

// One entry per shot in the reel. Times are in seconds.
export type Clip = {
  src: string | null; // path under public/, e.g. "footage/beach.mp4"; null = placeholder
  startFrom: number; // where in the source clip to start
  duration: number; // how long the shot stays on screen
  caption: string | null;
};

export type ReelProps = {
  title: string;
  subtitle: string;
  musicSrc: string | null; // path under public/, e.g. "music/track.mp3"
  clips: Clip[];
};

const TRANSITION_FRAMES = 8;
const TITLE_SECONDS = 1.5;

// Transitions overlap neighbouring shots, so they shorten the total length.
export const reelDuration = (props: ReelProps, fps: number) => {
  const shots = props.clips.reduce(
    (sum, clip) => sum + Math.round(clip.duration * fps),
    0,
  );
  return Math.max(1, shots - Math.max(0, props.clips.length - 1) * TRANSITION_FRAMES);
};

export const VacationReel: React.FC<ReelProps> = ({ title, subtitle, musicSrc, clips }) => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <TransitionSeries>
        {clips.map((clip, i) => [
          <TransitionSeries.Sequence
            key={`shot-${i}`}
            durationInFrames={Math.round(clip.duration * fps)}
          >
            <Shot clip={clip} index={i} />
          </TransitionSeries.Sequence>,
          i < clips.length - 1 ? (
            <TransitionSeries.Transition
              key={`transition-${i}`}
              presentation={fade()}
              timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
            />
          ) : null,
        ])}
      </TransitionSeries>
      <TitleCard title={title} subtitle={subtitle} />
      {musicSrc ? <Audio src={staticFile(musicSrc)} /> : null}
    </AbsoluteFill>
  );
};

// A single shot with a slow "Ken Burns" push-in and an optional caption.
const Shot: React.FC<{ clip: Clip; index: number }> = ({ clip, index }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const scale = interpolate(frame, [0, durationInFrames], [1, 1.08], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ transform: `scale(${scale})` }}>
        {clip.src ? (
          <OffthreadVideo
            src={staticFile(clip.src)}
            startFrom={Math.round(clip.startFrom * fps)}
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Placeholder index={index} />
        )}
      </AbsoluteFill>
      {clip.caption ? <Caption text={clip.caption} /> : null}
    </AbsoluteFill>
  );
};

const Caption: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame: frame - 6, fps, config: { damping: 200 } });

  return (
    <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", paddingBottom: 420 }}>
      <div
        style={{
          opacity: enter,
          transform: `translateY(${(1 - enter) * 40}px)`,
          color: "white",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: 1,
          textShadow: "0 4px 24px rgba(0,0,0,0.6)",
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};

const TitleCard: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const end = Math.round(TITLE_SECONDS * fps);
  const enter = spring({ frame, fps, config: { damping: 200 } });
  const exit = interpolate(frame, [end - 10, end], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.ease),
  });

  if (frame > end) return null;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: exit,
        color: "white",
        fontFamily: "Helvetica, Arial, sans-serif",
        textShadow: "0 6px 32px rgba(0,0,0,0.55)",
      }}
    >
      <div style={{ fontSize: 150, fontWeight: 800, letterSpacing: 8, transform: `scale(${0.9 + enter * 0.1})` }}>
        {title.toUpperCase()}
      </div>
      <div style={{ fontSize: 48, letterSpacing: 16, marginTop: 12 }}>{subtitle.toUpperCase()}</div>
    </AbsoluteFill>
  );
};

// Stand-in for a clip that hasn't been chosen yet, so the template renders without footage.
const COLORS = ["#0e7c86", "#f2a65a", "#2a9d8f", "#e76f51", "#264653"];
const Placeholder: React.FC<{ index: number }> = ({ index }) => (
  <AbsoluteFill
    style={{
      background: `linear-gradient(160deg, ${COLORS[index % COLORS.length]}, #111)`,
      justifyContent: "center",
      alignItems: "center",
      color: "rgba(255,255,255,0.35)",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontSize: 56,
    }}
  >
    Clip {index + 1}
  </AbsoluteFill>
);
