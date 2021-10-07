import { useEffect, useState } from 'react';

import Timeline from './components/Timeline';
import EmptyGallery from './components/EmptyGallery';
import GalleryTile from './components/GalleryTile';

import data from './data/data.json';

import Clip from './types/Clip';

import './App.css';

type DurationArray = [number, number, number, number];

const App: React.FC = () => {
  const [gallery, setGallery] = useState<Clip[]>([]);
  const [selectedClip, setSelectedClip] = useState<Clip[]>([]);

  useEffect(() => {
    // call API here
    setGallery(data as Clip[]);
  }, []);

  const totalDuration = selectedClip.reduce<DurationArray>(
    (total, clip) => total,
    [0, 0, 0, 0]
  );

  return (
    <div className="App">
      <header className="App-header">
        <h2>Show Reels</h2>
      </header>
      <main>
        <div className="reel">
          <div className="section-header">
            <h4>Reel name</h4>
            <span data-testid='total-duration'>00:00:00:00</span>
          </div>
          <Timeline />
        </div>
        <div className="gallery">
          <div className="section-header">
            <h4>Gallery</h4>
          </div>
          {gallery.length ? gallery.map((clip, index) => (
            <GalleryTile key={index} clip={clip} />
          )) : <EmptyGallery />}
        </div>
      </main>
    </div>
  );
}

export default App;
