import { render, screen, fireEvent, act } from '@testing-library/react';
import App from '../App';

describe('Acceptance tests', () => {
  const a = screen.getAllByTestId
  describe('Given I navigate to the user interface and create a PAL SD Video Reel', () => {
    describe('When I try and add NTSC SD video clip', () => {
      test('user interface should prevent me from doing this action', () => {
        render(<App />);
        const [palSdClip1, ntscSdClip1] = screen.getAllByTestId('gallery-tile');

        const timelineTiles1 = screen.queryAllByTestId('timeline-tile');
        expect(timelineTiles1).toHaveLength(0);

        act(() => {
          fireEvent.click(palSdClip1);
        });
        
        const timelineTiles2 = screen.getAllByTestId('timeline-tile');
        expect(timelineTiles2).toHaveLength(1);

        act(() => {
          fireEvent.click(ntscSdClip1);
        });
        const timelineTiles3 = screen.getAllByTestId('timeline-tile');
        expect(timelineTiles3).toHaveLength(1);
      });
    });

    describe('When I try and add PAL HD video clip', () => {
      test('user interface should prevent me from doing this action', () => {
        // 
      });
    });

    describe('When I add all the PAL SD video clips', () => {
      test('the total duration displayed is 00:02:11:01', () => {
        // 
      });
    });
  });

  describe('Given I navigate to the user interface and create a NTSC SD Video Reel', () => {
    describe('When I add all the NTSC SD video clips', () => {
      test('the total duration displayed is 00:00:54:08', () => {
        // 
      });
    });
  });

});
