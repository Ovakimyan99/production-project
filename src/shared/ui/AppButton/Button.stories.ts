import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator';

import { Button, ButtonSize, ButtonTheme } from './Button';

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
        theme: ButtonTheme.CLEAR,
        children: 'Текст кнопки',
    },
};

export const ThemeOutline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Кнопка',
    },
};

export const ThemeOutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Кнопка',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Backgound: Story = {
    args: {
        children: 'Кнопка',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgoundInverted: Story = {
    args: {
        children: 'Кнопка',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SizeM: Story = {
    args: {
        children: '>',
        size: ButtonSize.M,
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const SizeL: Story = {
    args: {
        children: '>',
        size: ButtonSize.L,
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const SizeXL: Story = {
    args: {
        children: '>',
        size: ButtonSize.XL,
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Square: Story = {
    args: {
        children: '>',
        square: true,
    },
};

export const Default: Story = {
    args: {
        children: 'Текст',
    },
};
