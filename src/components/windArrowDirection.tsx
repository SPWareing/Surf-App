import { WiDirectionUp } from 'react-icons/wi';
import '../css/windarrow.css';

interface WindDirectionArrowProps {
  direction: number;
  speed: number;
}

const WindDirectionArrow: React.FC<WindDirectionArrowProps> = ({ direction, speed }) => {
  let color;
  switch (true) {
    case speed >= 20:
      color = 'red';
      break;
    case speed >= 15 && speed < 20:
      color = 'orange';
      break;
    case speed < 15:
      color = 'green';
      break;
    default:
      color = 'black';
  }

  return (
    <div className="windarrowDirection-div">

      <WiDirectionUp style={{ transform: `rotate(${direction}deg) scaleY(-1)`, flex: "2", height: "2em", width: "2em" }} color={color} />
      <p className="speed">{speed} km/h </p>

    </div>
  );
};

export default WindDirectionArrow;