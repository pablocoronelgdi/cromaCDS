import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from '@cromaui/react'

const meta: Meta<typeof Image> = {
  title: 'Progressbar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    duration: { control: { type: 'number' } },
    label: { control: { type: 'text' } },
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const ProgressbarDefault: Story = {
  args: {
    duration: 1000,
  }
}

export const ProgressbarLabel: Story = {
  args: {
    duration: 1000,
    label: 'Subiendo archivos..'
  }
}
