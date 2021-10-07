import TimelineTile from '../TimelineTile';

import Clip from '../../types/Clip';
import './Timeline.css';

interface TimelineProps {
  gallery: Clip[];
  selectedIndexes: number[];
}
const Timeline: React.FC<TimelineProps> = ({ gallery, selectedIndexes }) => {
  const selectedClips = gallery.filter(
    (_, index) => selectedIndexes.includes(index)
  );
  return (
    <div className="timeline-base">
      {selectedClips.map((clip, index) => (
        <TimelineTile clip={clip} key={index} />
      ))}
    </div>
  );
};

export default Timeline;
