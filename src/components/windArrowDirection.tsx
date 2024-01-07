import { FaArrowUp } from 'react-icons/fa';

interface WindDirectionArrowProps {
  direction: number;
  speed: number;
}

const WindDirectionArrow: React.FC<WindDirectionArrowProps> = ({ direction, speed }) => {
  return (
    <div>
      <FaArrowUp style={{transform: `rotate(${direction}deg) scaleY(-1)`, height: '25px', color:'green', paddingRight:'1em'}} />
      <span>{speed} km/h</span>
    </div>
  );
};

export default WindDirectionArrow;