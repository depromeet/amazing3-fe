import { BottomNavigation } from '@/components/molecules/bottomNavigation';
import { FeedBody, FeedHeader } from '@/features/feed';

const FeedPage = () => {
  return (
    <>
      <FeedHeader />
      <FeedBody />
      <BottomNavigation />
    </>
  );
};

export default FeedPage;
