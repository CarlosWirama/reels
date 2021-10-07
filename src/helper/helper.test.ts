import { verifyAddNewClip } from '.';
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