import { FontSizes } from '@fluentui/react';
import { WiDirectionUp } from 'react-icons/wi';
import '../css/windarrow.css';

interface WindDirectionArrowProps {
  direction: number;
  speed: number;
}

const WindDirectionArrow: React.FC<WindDirectionArrowProps> = ({ direction, speed }) => {
  
  return (
    <div className="windarrowDirection-div">
      
      <WiDirectionUp style={{transform: `rotate(${direction}deg) scaleY(-1)`, flex: "2", height: "2em", width: "2em"}} />
      <p className="speed">{speed} km/h </p>
      
    </div>
  );
};

export default WindDirectionArrow;