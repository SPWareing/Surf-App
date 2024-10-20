import React from 'react';
import { render, screen } from '@testing-library/react';
import AppSidebar from '../components/appsidebar';

describe('AppSidebar Component', () => {
    beforeEach(() => {
        render(<AppSidebar />);
    });

    test('renders sidebar title', () => {
        const titleElement = screen.getByText('Sidebar');
        expect(titleElement).toBeInTheDocument();
    });

    test('renders all sidebar items', () => {
        const items = ['Home', 'About', 'Contact', 'Blog'];
        items.forEach(item => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });
});