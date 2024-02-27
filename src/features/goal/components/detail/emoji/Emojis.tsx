import { EmojisContainer, EmojisItem } from '@/components';

const emojis = [
  {
    id: 1,
    url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/3727715a-a778-4630-82b7-663662516ecc',
    name: '좋아요',
  },
];

interface EmojisProps {
  onToggle: VoidFunction;
}

export const Emojis = ({ onToggle }: EmojisProps) => {
  const handleReactEmoji = () => {
    // TODO: 리액션 추가하는 api
    onToggle();
  };

  return (
    <EmojisContainer
      className="absolute left-0 right-0 transform -translate-y-1/2 top-[-110px] flex justify-center z-[2]"
      animate={{ ...animate, exit: animate.initial }}
    >
      {emojis.map((emoji) => (
        <EmojisItem key={emoji.name} {...emoji} size={56} onClick={handleReactEmoji} />
      ))}
    </EmojisContainer>
  );
};

const animate = {
  initial: { opacity: 0, scale: 0.3 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.2 },
};
