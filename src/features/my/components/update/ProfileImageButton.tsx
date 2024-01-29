import type { Control } from 'react-hook-form';
import { useOverlay } from '@toss/use-overlay';

import CameraIcon from '@/assets/icons/camera-icon.svg';
import { Avatar } from '@/components';

import type { UpdateMemberDataFormValues } from '../../types';

import ProfileImageBottomSheet from './ProfileImageBottomSheet';

interface ProfileImageButtonProps {
  image: string;
  control: Control<UpdateMemberDataFormValues, unknown>;
}

const ProfileImageButton = ({ image, control }: ProfileImageButtonProps) => {
  const { open } = useOverlay();

  const handleOpenBottomSheet = () => {
    open(({ isOpen, close }) => <ProfileImageBottomSheet open={isOpen} onClose={close} control={control} />);
  };
  return (
    <button
      className="relative"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        handleOpenBottomSheet();
      }}
    >
      <Avatar size={151} profileImage={image} />
      <div className="p-[6px] rounded-xl absolute right-0 bottom-0 bg-white drop-shadow-[0_0_7.9px_rgba(0,88,255,0.1)]">
        <CameraIcon />
      </div>
    </button>
  );
};

export default ProfileImageButton;
