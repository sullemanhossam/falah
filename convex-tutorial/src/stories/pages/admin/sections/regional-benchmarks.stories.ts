import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';


const meta = {
  title: 'admin/sections/regional-benchmarks',
  component: Login,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

