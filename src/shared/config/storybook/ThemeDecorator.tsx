import { Decorator } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
