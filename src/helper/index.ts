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

export const getTotalDuration = (
  selectedIndexes: number[],
  gallery: Clip[],
): string => {
  type DurationArray = [number, number, number, number];
  const durationArray = selectedIndexes.reduce<DurationArray>(
    (total, clipIndex) => {
      const currClip = gallery[clipIndex];
      return currClip.endTimecode.split(':').map(
        (value, index) => Number(value) + total[index]
      ) as DurationArray;
    },
    [0, 0, 0, 0]
  );

  const sampleClip = gallery[selectedIndexes[0]];
  const fps = sampleClip?.standard === 'PAL' ? 25 : 30;
  const totalFrame = durationArray[3];
  const moddedFrame = `${totalFrame % fps}`;
  const formattedFrame = moddedFrame.length === 1 ? `0${moddedFrame}` : moddedFrame;

  const totalSecond = durationArray[2] + Math.floor(totalFrame / fps);
  const moddedSecond = `${totalSecond % 60}`;
  const formattedSecond = moddedSecond.length === 1 ? `0${moddedSecond}` : moddedSecond;

  const totalMinute = durationArray[1] + Math.floor(totalSecond / 60);
  const moddedMinute = `${totalMinute % 60}`;
  const formattedMinute = moddedMinute.length === 1 ? `0${moddedMinute}` : moddedMinute;

  const totalHour = durationArray[0] + Math.floor(totalMinute / 60);
  const moddedHour = `${totalHour % 60}`;
  const formattedHour = moddedHour.length === 1 ? `0${moddedHour}` : moddedHour;

  return `${formattedHour}:${formattedMinute}:${formattedSecond}:${formattedFrame}`;
};
