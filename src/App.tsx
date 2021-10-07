import { useEffect, useState } from 'react';

import Timeline from './components/Timeline';
import EmptyGallery from './components/EmptyGallery';

import data from './data/data.json';

import './App.css';

const App: React.FC = () => {
  const [clips, setClips] = useState([]);

  useEffect(() => {
    // call API here
    // setClips(data)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Show Reels</h2>
      </header>
      <main>
        <div className="reel">
          <div className="section-header">
            <h4>Reel name</h4>
            <span>00:00:00:00</span>
          </div>
          <Timeline />
        </div>
        <div className="gallery">
          <div className="section-header">
            <h4>Gallery</h4>
          </div>
          {clips.length ? clips.map(() => (<EmptyGallery />)) : <EmptyGallery />}
        </div>
      </main>
    </div>
  );
}

export default App;
