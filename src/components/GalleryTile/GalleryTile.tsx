import Clip from '../../types/Clip';

import './GalleryTile.css';

interface GalleryTileProps {
  clip: Clip;
}

const GalleryTile: React.FC<GalleryTileProps> = ({ clip }) => (
  <div className="gallery-tile" data-testid="gallery-tile">
    {clip.name}
  </div>
);

export default GalleryTile;
