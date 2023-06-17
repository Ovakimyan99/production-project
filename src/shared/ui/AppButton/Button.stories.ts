import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator';

import { Button, ThemeButton } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeClear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Текст кнопки',
    },
};

export const ThemeOutline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Кнопка',
    },
};

export const ThemeOutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Кнопка',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Default: Story = {
    args: {
        children: 'Текст',
    },
};