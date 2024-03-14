import { EmojiGroup } from '@/components';

// TODO: 모든 emoji를 받아오는 API로 수정 예정
export const emojis = [
  {
    id: 1,
    url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/3727715a-a778-4630-82b7-663662516ecc',
    name: '좋아요',
  },
  {
    id: 2,
    url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/3727715a-a778-4630-82b7-663662516ecc',
    name: '응원해요',
  },
  {
    id: 3,
    url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/3727715a-a778-4630-82b7-663662516ecc',
    name: '놀라워요',
  },
  {
    id: 4,
    url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/3727715a-a778-4630-82b7-663662516ecc',
    name: '열받아요',
  },
  {
    id: 5,
    url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/3727715a-a778-4630-82b7-663662516ecc',
    name: '슬퍼요',
  },
  {
    id: 6,
    url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/3727715a-a778-4630-82b7-663662516ecc',
    name: '대단해요',
  },
];

interface EmojisProps {
  onToggle: VoidFunction;
}

export const SelectReactionWindow = ({ onToggle }: EmojisProps) => {
  const handleReactEmoji = () => {
    // TODO: 리액션 추가하는 api
    onToggle();
  };

  return (
    <EmojiGroup.Container className="absolute left-0 right-0 transform -translate-y-1/2 top-[16px] flex justify-center z-[2]">
      {emojis.map((emoji) => (
        <EmojiGroup.Emoji key={emoji.name} {...emoji} size={56} onClick={handleReactEmoji} />
      ))}
    </EmojiGroup.Container>
  );
};
