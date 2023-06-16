import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider/lib/ThemeContext';
import { PageLoader } from './PageLoader';

const meta = {
    title: 'Widgets/PageLoader',
    component: PageLoader,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
