
/**
 * @description AppHeaderProps is an interface that defines the properties of {@link AppHeader} component.
 */
export type AppHeaderProps = {
    label: { latitude: number, longitude: number };
    color?: string
    style?: React.CSSProperties;
    sitename?: string;
    image?: string;

}

/**
 * @description ButtonProps is an interface that defines the properties of {@link ButtonSwitch} component.
 */
export interface ButtonProps {
    id: number;
    label: string;
    location: Location;
    direction?: number;
    image?: string;

}

export interface ButtonSwitchProps {
    onClick: (button: ButtonProps) => void;
}

export interface Location {
    latitude: number;
    longitude: number;
    direction?: number;
}