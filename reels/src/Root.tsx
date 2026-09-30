import { Composition } from "remotion";
import { VacationReel, reelDuration, type ReelProps } from "./VacationReel";
import edit from "./edit.json";

export const FPS = 30;

export const RemotionRoot: React.FC = () => (
  <Composition
    id="VacationReel"
    component={VacationReel}
    width={1080}
    height={1920}
    fps={FPS}
    durationInFrames={reelDuration(edit as ReelProps, FPS)}
    defaultProps={edit as ReelProps}
    calculateMetadata={({ props }) => ({
      durationInFrames: reelDuration(props, FPS),
    })}
  />
);
