import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

export type EmojiTitleProps = keyof typeof EMOJI;

export interface EmojiProps {
  name: EmojiTitleProps;
  count: number;
  size?: keyof typeof SIZE_CSS;
}

export const Emoji = ({ name, count, size = 'full' }: EmojiProps) => {
  const path = usePathname();
  const convertOver99 = count > 99 ? '99+' : count;
  const { image: imageSize, title: titleTextSize, count: countTextSize } = SIZE_CSS[size];

  return (
    <div className={`${imageSize} flex flex-col gap-[3px] justify-center cursor-pointer`}>
      <Link href={{ pathname: `${path}/emoji/${name}` }}>
        <div
          className={`${imageSize} relative aspect-[1/1] hover:shadow-md transition duration-300 rounded-lg overflow-hidden`}
        >
          <Image src={EMOJI[name].image} fill alt={`${name} 이모티콘`} />
        </div>
        <div className="flex justify-between items-center">
          <span className={`text-[#8490A0] ${titleTextSize}`}>{EMOJI[name].title}</span>
          <span className={`text-gray-70 ${countTextSize}`}>{convertOver99}</span>
        </div>
      </Link>
    </div>
  );
};
