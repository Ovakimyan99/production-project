import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider/lib/ThemeContext';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'Widget/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
