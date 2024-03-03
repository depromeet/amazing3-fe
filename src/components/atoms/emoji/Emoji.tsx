import Image from 'next/image';

export interface EmojiProps {
  size: number;
  url: string;
  name: string;
}

export const Emoji = ({ size, url, name }: EmojiProps) => {
  return <Image src={url} width={size} height={size} alt={`emoji_${name}`} />;
};
