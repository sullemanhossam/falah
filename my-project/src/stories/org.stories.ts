import Org from "@/views/organisation/org";
import type { Meta, StoryObj } from "@storybook/react";

// Define metadata for the story
const meta = {
  title: "Org/Summary",
  component: Org,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Org>; // <- Added `typeof Org` for better type inference

export default meta;

// Define the story type
type Story = StoryObj<typeof meta>;

// Add a basic story
export const Default: Story = {
  args: {
    // Add default props for the Org component here if needed
  },
};
