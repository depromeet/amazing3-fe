import type { StoryObj } from '@storybook/react';

import { EmojiGroup } from './EmojiGroup';

const meta = {
  title: 'components/molecules/emojiGroup',
};

export default meta;

type Story = StoryObj;

const emojis = [
  {
    id: 1,
    url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/3727715a-a778-4630-82b7-663662516ecc',
    name: '좋아요',
  },
  {
    id: 2,
    url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/0515378c-b6cc-47cd-850d-837c8ed91080',
    name: '응원해요',
  },
  {
    id: 3,
    url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/f7b0d37e-c514-4c02-8b49-8b65e3e28ec9',
    name: '놀라워요',
  },
  {
    id: 4,
    url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/75a0d5d4-6988-4952-b105-24ecb77af270',
    name: '열받아요',
  },
  {
    id: 5,
    url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/c0d0e892-34e7-4a6d-ae06-0a8faf142ae6',
    name: '슬퍼요',
  },
  {
    id: 6,
    url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/9e10e382-3ace-4923-b6a3-f96b7830164d',
    name: '대단해요',
  },
];

const ExampleEmojis = () => {
  return (
    <EmojiGroup.Container className="absolute top-0">
      {emojis.map((emoji) => (
        <EmojiGroup.Emoji key={emoji.name} {...emoji} size={56} onClick={() => alert('예를 들어 mutate?')} />
      ))}
    </EmojiGroup.Container>
  );
};

export const Example: Story = {
  render: () => <ExampleEmojis />,
};
