import DeletedBandiboodi from '@/assets/images/bandiboodi-deleted.svg';
import { Typography } from '@/components';

export const DeletedCheerer = () => {
  return (
    <div className="flex items-center">
      <DeletedBandiboodi alt="user-profile" width={32} height={32} className="rounded-full mr-5xs" />
      <Typography type="body2" className="text-gray-300">
        떠나간 반디부디
      </Typography>
    </div>
  );
};
