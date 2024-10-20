import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonSwitch from '../components/buttonSwitch';
import { ButtonProps } from '../components/buttonSwitch';

const mockOnClick = jest.fn();

describe('ButtonSwitch Component', () => {
    beforeEach(() => {
        render(<ButtonSwitch onClick={mockOnClick} />);
    });

    test('renders all buttons from BUTTONLIST', () => {
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(4);
        expect(screen.getByText('Saunton Sands')).toBeInTheDocument();
        expect(screen.getByText('Croyde Bay')).toBeInTheDocument();
        expect(screen.getByText('Bantham')).toBeInTheDocument();
        expect(screen.getByText('Woolacombe')).toBeInTheDocument();
    });

    test('calls onClick with correct button data when a button is clicked', () => {
        const button = screen.getByText('Saunton Sands');
        fireEvent.click(button);
        expect(mockOnClick).toHaveBeenCalledWith({
            id: 1,
            label: 'Saunton Sands',
            location: { latitude: 51.1173, longitude: -4.2049, direction: 90 },
            image: 'https://images.unsplash.com/photo-1561911023-ee4e7211fc4c'
        });
    });
});