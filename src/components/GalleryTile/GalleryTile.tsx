import Clip from '../../types/Clip';

import './GalleryTile.css';

interface GalleryTileProps {
  clip: Clip;
  index: number;
  onSelect: (clipIndex: number) => void;
  disabled?: boolean;
}

const GalleryTile: React.FC<GalleryTileProps> = ({
  clip,
  index,
  onSelect,
  disabled,
}) => (
  <div
    onClick={() => onSelect(index)}
    className={`gallery-tile ${disabled ? 'disabled' : ''}`}
    data-testid="gallery-tile"
  >
    {clip.name}
  </div>
);

export default GalleryTile;
