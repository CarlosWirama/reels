import { getTotalDuration, verifyAddNewClip } from '.';
import data from '../data/data.json';
import Clip from '../types/Clip';

describe('verifyAddNewClip', () => {
  const [palSdClip1] = data as Clip[];
  test('returns true for empty timeline', () => {
    const allowed = verifyAddNewClip(palSdClip1, null, null);
    expect(allowed).toBeTruthy();
  });

  test('returns true if the video standard and definition matches', () => {
    const allowed = verifyAddNewClip(palSdClip1, 'PAL', 'SD');
    expect(allowed).toBeTruthy();
  });

  test('returns false if one of the video attribute does not match', () => {
    const allowed = verifyAddNewClip(palSdClip1, 'PAL', 'HD');
    expect(allowed).toBeFalsy();
  });

  test('returns false if all of the video attribute does not match', () => {
    const allowed = verifyAddNewClip(palSdClip1, 'NTSC', 'HD');
    expect(allowed).toBeFalsy();
  });
});

describe('getTotalDuration', () => {
  test.each([
    ['00:00:00:00', []],
    ['00:02:11:01', [0, 2, 3]],
    ['00:00:20:00', [5]],
    ['00:00:34:08', [1, 4]],
    ['00:00:54:08', [1, 4, 5]],
  ])('returns %s', (expectedResult, selectedIndex) => {
    const gallery = data as Clip[];
    const duration = getTotalDuration(selectedIndex, gallery);
    expect(duration).toEqual(expectedResult);
  });
});
