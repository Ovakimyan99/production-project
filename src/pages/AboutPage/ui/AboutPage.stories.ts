import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider/lib/ThemeContext';
import AboutPage from './index';

const meta = {
    title: 'Pages/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
