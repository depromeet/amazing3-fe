'use client';

import { Typography } from '@/components';
import { useUpdatePublication } from '@/hooks/reactQuery/lifeMap/useUpdatePublication';

import RadioButton from './RadioButton';

interface LifeMapPrivacySettingProps {
  isPublic: boolean;
}

const groupItems = [
  { description: '전체보기', value: 'public' },
  { description: '나만보기', value: 'private' },
];

export const LifeMapPrivacySetting = ({ isPublic }: LifeMapPrivacySettingProps) => {
  const { mutate } = useUpdatePublication();

  const handleClickRadioButton = (value: string) => {
    mutate({ isPublic: value === 'public' });
  };

  return (
    <div className="py-[15px] w-full flex justify-center">
      <div className="w-[349px] h-[76px] flex gap-[36px] bg-white items-center justify-center rounded-lg shadow-[0_1.001px_40px_0_rgba(197,229,255,0.3)]">
        <Typography type="caption1" className="text-gray-40">
          인생지도 공개 범위
        </Typography>
        <div className="flex gap-3xs">
          {groupItems.map(({ description, value }) => (
            <RadioButton
              key={value}
              name="lifeMapPrivacySetting"
              description={description}
              value={value}
              selectedValue={isPublic ? 'public' : 'private'}
              onChange={handleClickRadioButton}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
