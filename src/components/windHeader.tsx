// Import your styles and any icons you need

import '../css/windheader.css';
import { WiThermometer, WiBarometer, WiTsunami, WiWindy } from "react-icons/wi";// replace 'IconName' with the actual icon you want to use
import { GiBigWave } from "react-icons/gi";
import { TiWaves } from "react-icons/ti";


const ICONS = {

  temp: WiThermometer,
  pressure: WiBarometer,
  wave: GiBigWave,
  wind: WiWindy,
  period: TiWaves

  // Add more icons as needed
};


type TableHeaderProps = {
  text: string;
  icon: keyof typeof ICONS;

}

function TableHeader({ text, icon }: TableHeaderProps) {

  const Icon = ICONS[icon];

  return (
    <div className="windheader-div">
      <Icon className="header-icon" data-testid={`icon-${icon}`} />
      <p>{text}</p>
    </div>
  );
}

export default TableHeader;