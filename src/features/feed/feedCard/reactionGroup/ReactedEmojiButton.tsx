import { type ButtonHTMLAttributes, useState } from 'react';

import { Emoji, Typography } from '@/components';

interface ReactedEmojiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  url: string;
  name: string;
  count: number;
  isMyReaction: boolean;
}

export const ReactedEmojiButton = ({ url, name, count, isMyReaction, ...props }: ReactedEmojiButtonProps) => {
  const [isClicked, setIsClicked] = useState(isMyReaction);
  const [currentCount, setCurrentCount] = useState(count);

  const handleClickButton = () => {
    setIsClicked((prev) => !prev);
    setCurrentCount((prev) => (isClicked ? prev - 1 : prev + 1));
    // TODO: isMyReaction에 따른 리액션 추가/취소 API 연결
  };

  return (
    <button
      className={`py-6xs px-5xs flex gap-6xs items-center rounded-full border box-border ${
        isClicked ? 'bg-blue-10 border-blue-50' : 'bg-gray-10 border-white'
      }`}
      onClick={handleClickButton}
      {...props}
    >
      <Emoji url={url} size={24} name={name} />
      <Typography type="caption1" className={`${isClicked ? 'text-blue-50' : 'text-gray-40'}`}>
        {currentCount > 999 ? '999+' : currentCount}
      </Typography>
    </button>
  );
};
