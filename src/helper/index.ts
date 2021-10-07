import Clip from '../types/Clip';
import { VideoDefinition, VideoStandard } from '../types/VideoAttribute';

export const verifyAddNewClip = (
  testClip: Clip,
  selectedStandard: VideoStandard | null,
  selectedDefinition: VideoDefinition | null
): boolean => {
  if (selectedStandard === null && selectedDefinition === null) {
    return true;
  }

  return testClip.standard === selectedStandard &&
    testClip.definition === selectedDefinition;
}
