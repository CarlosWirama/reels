import { useEffect, useState } from 'react';

import Timeline from './components/Timeline';
import EmptyGallery from './components/EmptyGallery';
import GalleryTile from './components/GalleryTile';
import { verifyAddNewClip } from './helper';

import data from './data/data.json';

import Clip from './types/Clip';
import { VideoDefinition, VideoStandard } from './types/VideoAttribute';

import './App.css';

type DurationArray = [number, number, number, number];

const App: React.FC = () => {
  const [gallery, setGallery] = useState<Clip[]>([]);
  const [selectedClipIndexes, setSelectedClipIndexes] = useState<number[]>([]);
  const [
    selectedStandard,
    setSelectedStandard
  ] = useState<VideoStandard | null>(null);
  const [
    selectedDefinition,
    setSelectedDefinition
  ] = useState<VideoDefinition | null>(null);

  useEffect(() => {
    // call API here
    setGallery(data as Clip[]);
  }, []);

  const addOrRemoveClip = (clipIndex: number) => {
    // i know this is a bad name, but haven't thought about more appropiate one
    const clipIndexIndex = selectedClipIndexes.indexOf(clipIndex);
    if (clipIndexIndex !== -1) {
      const newIndexes = [
        ...selectedClipIndexes.slice(0, clipIndexIndex),
        ...selectedClipIndexes.slice(clipIndexIndex + 1)
      ];
      setSelectedClipIndexes(newIndexes);
      if (newIndexes.length === 0) {
        setSelectedStandard(null);
        setSelectedDefinition(null);
      }
    } else {
      const selectedClip = gallery[clipIndex];
      setSelectedClipIndexes([...selectedClipIndexes, clipIndex]);
      setSelectedStandard(selectedClip.standard);
      setSelectedDefinition(selectedClip.definition);
    }
  }

  const onSelectClip = (clipIndex: number) => {
    const allowed = verifyAddNewClip(gallery[clipIndex], selectedStandard, selectedDefinition);
    if (allowed) {
      addOrRemoveClip(clipIndex);
    }
  }

  const totalDuration = selectedClipIndexes.reduce<DurationArray>(
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
          <Timeline gallery={gallery} selectedIndexes={selectedClipIndexes} />
        </div>
        <div className="gallery">
          <div className="section-header">
            <h4>Gallery</h4>
          </div>
          {gallery.length ? gallery.map((clip, index) => {
            const tileDisabled = selectedStandard !== null && (
              clip.standard !== selectedStandard ||
              clip.definition !== selectedDefinition
            );
              return (
                <GalleryTile
                  key={index}
                  index={index}
                  clip={clip}
                  onSelect={onSelectClip}
                  disabled={tileDisabled}
                />
              );
            }) : <EmptyGallery />}
        </div>
      </main>
    </div>
  );
}

export default App;
