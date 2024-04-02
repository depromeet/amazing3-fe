'use client';

import type { ButtonHTMLAttributes } from 'react';
import Image from 'next/image';

import LikeIcon from '@/assets/icons/like-icon.png';
import { Button, Typography } from '@/components';

interface CheeringButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const CheeringButton = (props: CheeringButtonProps) => {
  return (
    <Button className="flex items-center bg-gradient-to-r to-[#FCF3FF] from-[#EAF1FF]" {...props}>
      <Image src={LikeIcon} alt="like-button-image" width={24} height={24} />
      <Typography type="subLabel1" className="text-blue-50">
        응원보내기
      </Typography>
    </Button>
  );
};
