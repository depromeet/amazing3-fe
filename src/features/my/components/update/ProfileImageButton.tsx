import CameraIcon from '@/assets/icons/camera-icon.svg';
import { Avatar } from '@/components';

interface ProfileImageButtonProps {
  image: string;
}

const ProfileImageButton = ({ image }: ProfileImageButtonProps) => {
  return (
    <button className="relative">
      <Avatar size={151} profileImage={image} />
      <div className="p-[6px] rounded-xl absolute right-0 bottom-0 bg-white drop-shadow-[0_0_7.9px_rgba(0,88,255,0.1)]">
        <CameraIcon />
      </div>
    </button>
  );
};

export default ProfileImageButton;
