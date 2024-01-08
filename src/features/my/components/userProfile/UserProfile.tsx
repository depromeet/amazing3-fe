import ProfileCard from './ProfileCard';

const UserProfile = () => {
  // TODO: API 연결로 데이터 받아오기
  return (
    <div className="flex flex-col items-center justify-center">
      <ProfileCard days={131} totalGoals={4} />
    </div>
  );
};

export default UserProfile;
