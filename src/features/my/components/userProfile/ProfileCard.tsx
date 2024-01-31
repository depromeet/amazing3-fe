import StarIcon from '@/assets/icons/star-icon.svg';
import ProfileCardCoverImage from '@/assets/images/profile-card.svg';
import { Span, Typography } from '@/components';

interface ProfileCardProps {
  days: number;
  totalGoals: number;
}

const ProfileCard = ({ days, totalGoals }: ProfileCardProps) => {
  return (
    <div className="w-[349px] h-[130px] bg-white rounded-lg overflow-hidden relative">
      <div className="absolute top-2xs left-3xs text-blue-35">
        <Typography className="font-insungit">
          반디부디와 함께한지 <Span type="purple30">{days}일</Span>
        </Typography>
        <div className="flex items-center">
          <Typography className="font-insungit">
            <Span type="purple30">{totalGoals}조각</Span>의 목표를 작성했어요
          </Typography>
          <StarIcon />
        </div>
      </div>
      <ProfileCardCoverImage />
    </div>
  );
};

export default ProfileCard;
