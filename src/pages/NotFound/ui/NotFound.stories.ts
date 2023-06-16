import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider/lib/ThemeContext';
import { NotFound } from './NotFound';

const meta = {
    title: 'Pages/NotFound',
    component: NotFound,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
