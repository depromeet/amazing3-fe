import Image from 'next/image';

import AngryEmoji from '@/assets/emoji/angry.png';
import AwesomeEmoji from '@/assets/emoji/awesome.png';
import CheerEmoji from '@/assets/emoji/cheer.png';
import LikeEmoji from '@/assets/emoji/like.png';
import SadEmoji from '@/assets/emoji/sad.png';
import SurprisedEmoji from '@/assets/emoji/surprised.png';

export const EMOJI = {
  like: {
    title: '좋아요',
    image: LikeEmoji,
  },
  cheer: {
    title: '응원해요',
    image: CheerEmoji,
  },
  angry: {
    title: '열받아요',
    image: AngryEmoji,
  },
  sad: {
    title: '슬퍼요',
    image: SadEmoji,
  },
  awesome: {
    title: '대단해요',
    image: AwesomeEmoji,
  },
  surprised: {
    title: '놀라워요',
    image: SurprisedEmoji,
  },
};

export type EmojiTitleProps = keyof typeof EMOJI;
export const emojiNameSet = Object.entries(EMOJI).map(([name]) => name) as EmojiTitleProps[];

const SIZE_CSS = {
  small: {
    image: 'w-[50px]',
    title: 'text-[9px]',
    count: 'text-[7px]',
  },
  medium: {
    image: 'w-[70px]',
    title: 'text-[14px]',
    count: 'text-[12px]',
  },
  full: {
    image: 'w-full',
    title: 'text-[10px]',
    count: 'text-[8px]',
  },
};

export interface EmojiProps {
  name: EmojiTitleProps;
  count?: number;
  size?: keyof typeof SIZE_CSS;
  onlyImage?: boolean;
  onClick?: VoidFunction;
}

export const Emoji = ({ name, count, size = 'full', onlyImage = false, onClick }: EmojiProps) => {
  const convertOver99 = count && count > 99 ? '99+' : count;
  const { image: imageSize, title: titleTextSize, count: countTextSize } = SIZE_CSS[size];

  return (
    <button
      className={`${imageSize} flex flex-col gap-[3px] justify-center ${!onClick && 'cursor-default'}`}
      onClick={onClick}
    >
      <div
        className={`${imageSize} relative aspect-[1/1] ${
          onClick && 'hover:shadow-md transition duration-300 rounded-lg overflow-hidden'
        }`}
      >
        <Image src={EMOJI[name].image} fill alt={`${name} 이모티콘`} />
      </div>
      {!onlyImage && (
        <div className={`flex w-full items-center ${count ? 'justify-between' : 'justify-center'}`}>
          <span className={`text-[#8490A0] ${titleTextSize}`}>{EMOJI[name].title}</span>
          <span className={`text-gray-70 ${countTextSize}`}>{convertOver99}</span>
        </div>
      )}
    </button>
  );
};
