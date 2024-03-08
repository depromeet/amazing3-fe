'use client';

import type { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import Image from 'next/image';

import { BottomSheet } from '@/components/atoms';
import { useGetDefaultProfileImages } from '@/hooks/reactQuery/profile';

import type { UpdateMemberDataFormValues } from '../../types';

interface ProfileImageBottomSheetProps {
  open: boolean;
  onClose: VoidFunction;
  control: Control<UpdateMemberDataFormValues, unknown>;
}

const ProfileImageBottomSheet = ({ open, onClose, control }: ProfileImageBottomSheetProps) => {
  const { data: profileImageData } = useGetDefaultProfileImages();

  return (
    <BottomSheet open={open} onDismiss={onClose} fixedMaxHeight={540}>
      <div className="p-3xs">
        <Controller
          name="image"
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className="grid grid-cols-2 gap-3xs">
              {profileImageData?.map(({ id, name, url }) => (
                <button
                  key={id}
                  className="flex flex-col items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    onChange(url);
                    onClose();
                  }}
                >
                  <div className={`p-5xs rounded-lg ${value === url ? 'bg-blue-10' : ''}`}>
                    <Image src={url} alt={name} width={150} height={150} priority />
                  </div>
                </button>
              ))}
            </div>
          )}
        />
      </div>
    </BottomSheet>
  );
};

export default ProfileImageBottomSheet;
