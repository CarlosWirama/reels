import Clip from '../../types/Clip';

import './GalleryTile.css';

interface GalleryTileProps {
  clip: Clip;
  onSelect: (clipIndex: number) => void;
  disabled?: boolean;
  selected?: boolean;
}

const GalleryTile: React.FC<GalleryTileProps> = ({
  clip,
  onSelect,
  disabled,
  selected,
}) => (
  <div
    onClick={() => onSelect(clip.id)}
    className={
      `gallery-tile ${disabled ? 'disabled' : ''} ${selected ? 'selected' : ''}`
    }
    data-testid="gallery-tile"
  >
    {clip.name}
  </div>
);

export default GalleryTile;
