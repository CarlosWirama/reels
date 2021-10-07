import { VideoStandard, VideoDefinition } from './VideoAttribute';

interface Clip {
  name: string;
  description: string;
  standard: VideoStandard;
  definition: VideoDefinition;
  startTimecode: string;
  endTimecode: string;
}

export default Clip;
