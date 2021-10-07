import { render, screen, fireEvent, act } from '@testing-library/react';
import App from '../App';

describe('Acceptance tests', () => {
  test('initial state', () => {
    render(<App />);
    const timelineTiles = screen.queryAllByTestId('timeline-tile');
    expect(timelineTiles).toHaveLength(0);
  });

  describe('Given I navigate to the user interface and create a PAL SD Video Reel', () => {
    const createPalSdVideoReel = () => {
      render(<App />);
      const [
        palSdClip1,
        ntscSdClip,
        palSdClip2,
        palSdClip3,
        ___,
        ____,
        palHdClip,
      ] = screen.getAllByTestId('gallery-tile');
  
      act(() => {
        fireEvent.click(palSdClip1);
      });

      return { ntscSdClip, palSdClip2, palSdClip3, palHdClip }
    };

    test('create a PAL SD Video Reel', () => {
      createPalSdVideoReel();

      const timelineTiles2 = screen.getAllByTestId('timeline-tile');
      expect(timelineTiles2).toHaveLength(1);
  
    });

    describe('When I try and add NTSC SD video clip', () => {
      test('user interface should prevent me from doing this action', () => {
        const { ntscSdClip } = createPalSdVideoReel();
        act(() => {
          fireEvent.click(ntscSdClip);
        });
        const timelineTiles3 = screen.getAllByTestId('timeline-tile');
        expect(timelineTiles3).toHaveLength(1);
      });
    });

    describe('When I try and add PAL HD video clip', () => {
      test('user interface should prevent me from doing this action', () => {
        const { palHdClip } = createPalSdVideoReel();
        act(() => {
          fireEvent.click(palHdClip);
        });
        const timelineTiles3 = screen.getAllByTestId('timeline-tile');
        expect(timelineTiles3).toHaveLength(1);
      });
    });

    describe('When I add all the PAL SD video clips', () => {
      test('the total duration displayed is 00:02:11:01', () => {
        const { palSdClip2, palSdClip3 } = createPalSdVideoReel();
        act(() => {
          fireEvent.click(palSdClip2);
        });
        act(() => {
          fireEvent.click(palSdClip3);
        });
        const timelineTiles = screen.getAllByTestId('timeline-tile');
        expect(timelineTiles).toHaveLength(3);

        const totalDuration = screen.getByTestId('total-duration');
        expect(totalDuration).toHaveTextContent('00:02:11:01');
      });
    });
  });

  describe('Given I navigate to the user interface and create a NTSC SD Video Reel', () => {
    describe('When I add all the NTSC SD video clips', () => {
      test('the total duration displayed is 00:00:54:08', () => {
        render(<App />);
        const [
          _,
          ntscSdClip1,
          __,
          ___,
          ntscSdClip2,
          ntscSdClip3,
        ] = screen.getAllByTestId('gallery-tile');
    
        act(() => {
          fireEvent.click(ntscSdClip1);
        });

        act(() => {
          fireEvent.click(ntscSdClip2);
        });

        act(() => {
          fireEvent.click(ntscSdClip3);
        });

        const totalDuration = screen.getByTestId('total-duration');
        expect(totalDuration).toHaveTextContent('00:00:54:08');
      });
    });
  });

});
