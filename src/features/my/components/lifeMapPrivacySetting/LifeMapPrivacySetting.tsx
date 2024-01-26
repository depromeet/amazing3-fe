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
    <div className="py-[15px] w-full flex justify-center">
      <div className="w-[349px] h-[76px] flex gap-[36px] bg-white items-center justify-center rounded-lg shadow-[0_1.001px_40px_0_rgba(197,229,255,0.3)]">
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
    </div>
  );
};
