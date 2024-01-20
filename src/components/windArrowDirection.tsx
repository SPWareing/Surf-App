import { FontSizes } from '@fluentui/react';
import { WiDirectionUp } from 'react-icons/wi';
import '../css/windarrow.css';

interface WindDirectionArrowProps {
  direction: number;
  speed: number;
}

const WindDirectionArrow: React.FC<WindDirectionArrowProps> = ({ direction, speed }) => {
  console.log(`Direction = ${direction}`);
  return (
    <div style={{boxSizing: "border-box", display:"flex", gap:"0.5em"}}>
      <WiDirectionUp style={{transform: `rotate(${direction}deg) scaleY(-1)`, flex: "2"}} />
      <p className="speed">{speed} km/h </p>
    </div>
  );
};

export default WindDirectionArrow;