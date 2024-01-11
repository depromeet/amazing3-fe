'use client';

import { Typography } from '@/components';

import RadioButtonGroup from './RadioButtonGroup';

interface LifeMapPrivacySettingProps {
  isPublic: boolean;
}

export const LifeMapPrivacySetting = ({ isPublic }: LifeMapPrivacySettingProps) => {
  const groupItems = [
    { description: '전체보기', value: 'public', checked: isPublic },
    { description: '나만보기', value: 'private', checked: !isPublic },
  ];

  return (
    <div className="py-[15px] w-full flex justify-center">
      <div className="w-[349px] h-[76px] flex gap-[36px] bg-white items-center justify-center rounded-lg shadow-[0_1.001px_40px_0_rgba(197,229,255,0.3)]">
        <Typography type="caption1" className="text-gray-40">
          인생지도 공개 범위
        </Typography>
        <RadioButtonGroup items={groupItems} />
      </div>
    </div>
  );
};
