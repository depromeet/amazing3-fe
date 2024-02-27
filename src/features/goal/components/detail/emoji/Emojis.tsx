import { m } from 'framer-motion';

import { Emoji, Typography } from '@/components';

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
    <m.div
      initial={initial}
      animate={animate}
      exit={initial}
      transition={transition}
      className="absolute left-0 right-0 transform -translate-y-1/2 top-[-110px] flex justify-center z-[2]"
    >
      <div className="flex gap-6xs px-5xs py-4xs rounded-[20px] bg-white shadow-thumbStrong">
        {emojis.map(({ id, ...props }) => (
          <button
            key={id}
            className="flex flex-col gap-6xs items-center transition-transform duration-300 hover:-translate-y-1"
            onClick={handleReactEmoji}
          >
            <Emoji {...props} size={56} />
            <Typography type="body3">{props.name}</Typography>
          </button>
        ))}
      </div>
    </m.div>
  );
};

const initial = { opacity: 0, scale: 0.3 };
const animate = { opacity: 1, scale: 1 };
const transition = { duration: 0.2 };
