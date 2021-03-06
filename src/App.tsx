import { useEffect, useState } from 'react';

import Timeline from './components/Timeline';
import EmptyGallery from './components/EmptyGallery';
import GalleryTile from './components/GalleryTile';
import { getTotalDuration, verifyAddNewClip } from './helper';

import data from './data/data.json';

import Clip from './types/Clip';
import { VideoDefinition, VideoStandard } from './types/VideoAttribute';

import './App.css';

const App: React.FC = () => {
  const [gallery, setGallery] = useState<Clip[]>([]);
  const [searchText, setSearchText] = useState('');
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
  };

  const onChangeSearch = (value: string) => {
    setSearchText(value);
  };

  const totalDuraion = getTotalDuration(selectedClipIndexes, gallery);

  const displayedTiles = gallery.filter(({ name }) => {
    console.log({searchText, name})
    return searchText
    ? name.toLowerCase().includes(searchText)
    : true
  });
  console.log({displayedTiles})

  return (
    <div className="App">
      <header className="App-header">
        <h2>Show Reels</h2>
      </header>
      <main>
        <div className="reel">
          <div className="section-header">
            <h4>Reel name</h4>
            <span data-testid='total-duration'>{totalDuraion}</span>
          </div>
          <Timeline gallery={gallery} selectedIndexes={selectedClipIndexes} />
        </div>
        <div className="gallery">
          <div className="section-header">
            <h4>Gallery</h4>
          </div>
          <div>
            <input
              value={searchText}
              onChange={e => onChangeSearch(e.target.value)}
            />
          </div>
          <div className="gallery-tile-wrapper">
            {displayedTiles.length ? displayedTiles.map((clip, index) => {
              const tileDisabled = selectedStandard !== null && (
                clip.standard !== selectedStandard ||
                clip.definition !== selectedDefinition
              );
                return (
                  <GalleryTile
                    key={index}
                    clip={clip}
                    onSelect={onSelectClip}
                    disabled={tileDisabled}
                    selected={selectedClipIndexes.includes(clip.id)}
                  />
                );
              }) : <EmptyGallery />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
