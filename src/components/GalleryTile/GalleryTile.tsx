import Clip from '../../types/Clip';

import './GalleryTile.css';

interface GalleryTileProps {
  clip: Clip;
  index: number;
  onSelect: (clipIndex: number) => void;
}

const GalleryTile: React.FC<GalleryTileProps> = ({
  clip,
  index,
  onSelect,
}) => (
  <div
    onClick={() => onSelect(index)}
    className="gallery-tile"
    data-testid="gallery-tile"
  >
    {clip.name}
  </div>
);

export default GalleryTile;
