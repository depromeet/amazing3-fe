import React from 'react';
import Link from 'next/link';

import ForwardIcon from '@/assets/icons/forward-icon.svg';
import { Avatar, Typography } from '@/components';
import { convertTimeToElapsedTime } from '@/utils/date';

interface FeedCardHeaderProps {
  profileImage: string;
  nickname: string;
  username: string;
  goalCreatedTime: string;
  goalCounts: number;
}

export const FeedCardHeader = ({
  profileImage,
  nickname,
  username,
  goalCreatedTime,
  goalCounts,
}: FeedCardHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5xs">
        <Avatar size={40} profileImage={profileImage} />
        <div className="flex flex-col">
          <Typography type="title4" className="text-gray-50">
            {nickname}
          </Typography>
          <Typography type="caption1" className="text-gray-40">
            {convertTimeToElapsedTime(goalCreatedTime)}
          </Typography>
        </div>
      </div>
      <Link href={{ pathname: `/home/${username}` }}>
        <button className="px-4xs py-6xs flex gap-6xs bg-blue-10 rounded-md">
          <Typography type="title5" className="text-blue-30">
            {goalCounts} 개 목표조각 보러가기
          </Typography>
          <ForwardIcon width={16} fill="#69B1FF" />
        </button>
      </Link>
    </div>
  );
};
