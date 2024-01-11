import VerticalBar from '@/assets/icons/vertical-bar.svg';
import { Span, Typography } from '@/components';

interface UserInfoProps {
  nickname: string;
  birth: string;
  username: string;
  email: string;
}

const UserInfo = ({ nickname, birth, username, email }: UserInfoProps) => {
  return (
    <div className="flex flex-col items-center text-gray-40">
      <Typography type="title1">
        <Span type="blue50">{nickname}</Span>님
      </Typography>
      <div className="flex gap-1 items-center">
        <Typography type="title4">{birth}</Typography>
        <VerticalBar width="2" height="16" />
        <Typography type="title4">@{username}</Typography>
      </div>
      <Typography type="title4">{email}</Typography>
    </div>
  );
};

export default UserInfo;
