import { useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    // call API here
  });

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
          <div className="timeline-base">
          </div>
        </div>
        <div className="gallery">
          <div className="section-header">
            <h4>Gallery</h4>
          </div>
          <div className="empty-gallery">
            you don't have any supported video
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
