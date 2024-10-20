import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from '../components/windHeader';
import { WiThermometer, WiBarometer, WiWindy } from 'react-icons/wi';
import { GiBigWave } from "react-icons/gi";
import { TiWaves } from "react-icons/ti";

describe('TableHeader Component', () => {
    test('renders the correct icon and text', () => {
        render(<TableHeader text="Temperature" icon="temp" />);
        expect(screen.getByText('Temperature')).toBeInTheDocument();
        expect(screen.getByTestId('icon-temp')).toBeInTheDocument();
    });

    test('renders the correct icon for pressure', () => {
        render(<TableHeader text="Pressure" icon="pressure" />);
        expect(screen.getByText('Pressure')).toBeInTheDocument();
        expect(screen.getByTestId('icon-pressure')).toBeInTheDocument();
    });

    test('renders the correct icon for wave', () => {
        render(<TableHeader text="Wave" icon="wave" />);
        expect(screen.getByText('Wave')).toBeInTheDocument();
        expect(screen.getByTestId('icon-wave')).toBeInTheDocument();
    });

    test('renders the correct icon for wind', () => {
        render(<TableHeader text="Wind" icon="wind" />);
        expect(screen.getByText('Wind')).toBeInTheDocument();
        expect(screen.getByTestId('icon-wind')).toBeInTheDocument();
    });

    test('renders the correct icon for period', () => {
        render(<TableHeader text="Period" icon="period" />);
        expect(screen.getByText('Period')).toBeInTheDocument();
        expect(screen.getByTestId('icon-period')).toBeInTheDocument();
    });
});