import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('open', () => {
        renderWithTranslation(
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>,
        );
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>,
        );

        const toggleBtn = screen.getByTestId('sidebar-toggle');

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
