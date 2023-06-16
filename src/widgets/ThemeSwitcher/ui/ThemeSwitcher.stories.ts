import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider/lib/ThemeContext';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
    title: 'Widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
