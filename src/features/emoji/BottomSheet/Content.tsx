'use client';

import { Content as BaseContent } from '@radix-ui/react-tabs';

import { ReactUser } from './ReactUser';

interface ContentProps {
  reactedEmojis: {
    id: number;
    url: string;
    name: string;
    reactCount: number;
    reactUsers: ReactedUserProps[];
  }[];
}

export interface ReactedUserProps {
  username: string;
  image: string;
  nickname: string;
}

export const Content = ({ reactedEmojis }: ContentProps) => {
  return (
    <>
      {reactedEmojis.map((emoji) => (
        <BaseContent value={emoji.name} key={emoji.id} className="px-xs pt-[13px]">
          {emoji.reactUsers.map((user) => (
            <ReactUser key={`${emoji.id}-${user.username}`} {...user} />
          ))}
        </BaseContent>
      ))}
    </>
  );
};
