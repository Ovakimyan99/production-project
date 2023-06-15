import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Loader } from './Loader';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider/lib/ThemeContext';

const meta = {
    title: 'Shared/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};
