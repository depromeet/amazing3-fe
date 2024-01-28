'use client';

import { Typography } from '@/components';
import { useUpdatePublication } from '@/hooks/reactQuery/lifeMap/useUpdatePublication';

import { PRIVACY_SETTING_RADIO_BUTTONS, Visibility } from '../../constants';

import RadioButton from './RadioButton';

interface LifeMapPrivacySettingProps {
  isPublic: boolean;
}

export const LifeMapPrivacySetting = ({ isPublic }: LifeMapPrivacySettingProps) => {
  const { mutate } = useUpdatePublication();

  const handleClickRadioButton = (selected: string) => {
    mutate({ isPublic: selected === Visibility.PUBLIC });
  };

  return (
    <>
      <div className="w-[310px] h-[48px] flex gap-[36px] items-center justify-center">
        <Typography type="caption1" className="text-gray-40">
          인생지도 공개 범위
        </Typography>
        <div className="flex gap-3xs">
          {PRIVACY_SETTING_RADIO_BUTTONS.map(({ description, value }) => (
            <RadioButton
              key={value}
              name="lifeMapPrivacySetting"
              description={description}
              value={value}
              selectedValue={isPublic ? Visibility.PUBLIC : Visibility.PRIVATE}
              onChange={handleClickRadioButton}
            />
          ))}
        </div>
      </div>
    </>
  );
};
