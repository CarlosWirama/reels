import Clip from '../../types/Clip';
import './TimelineTile.css';

interface TimelineProps {
  clip: Clip;
}
const TimelineTile: React.FC<TimelineProps> = ({ clip }) => (
  <div className="timeline-tile" data-testid="timeline-tile">
    {clip.name}
  </div>
);

export default TimelineTile;
