import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '@cromaui/react';

const meta = {
  title: 'Atoms/TextArea',
  component: TextArea,
  argTypes: {
    title: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    text: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text'} },
    error: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    maxLength: { control: { type: 'number' } },
  },
} satisfies Meta<typeof TextArea>;

export default meta
type Story = StoryObj<typeof meta>;

export const TextAreaDefault: Story =
{
    args: {
        label: 'Texto de ejemplo',
        text: "Quiero comunicar que...",
        errorMessage: "Texto de referencia",
        error: false,
        disabled: false,
        maxLength: 100
    },
}

export const TextAreaTitle: Story =
{
    args: {
        title: 'Dejar comentario',
        label: 'Texto de ejemplo',
        text: "Quiero comunicar que...",
        errorMessage: "Texto de referencia",
        error: false,
        disabled: false,
        maxLength: 100
    },
}

export const TextAreaError: Story =
{
    args: {
        title: 'Dejar comentario',
        label: 'Texto de ejemplo',
        text: "Quiero comunicar que...",
        errorMessage: "Se supero el limite de caracteres",
        error: true,
        disabled: false,
        maxLength: 100
    },
}

export const TextAreaDisabled: Story =
{
    args: {
        title: 'Dejar comentario',
        label: 'Texto de ejemplo',
        text: "Quiero comunicar que...",
        errorMessage: "Se supero el limite de caracteres",
        error: false,
        disabled: true,
        maxLength: 100
    },
}