import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider/lib/ThemeContext';

const meta = {
    title: 'Shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
        children: 'Текст'
    }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    },
};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    },
};

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};
