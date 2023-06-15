import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import MainPage from './index';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider/lib/ThemeContext';

const meta = {
    title: 'Pages/MainPage',
    component: MainPage,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};
