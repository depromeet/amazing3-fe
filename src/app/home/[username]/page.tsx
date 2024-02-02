import { LifeMap } from '@/features/home/components';

export interface HomeRouteParams {
  params: { username: string };
}

const HomePage = ({ params: { username } }: HomeRouteParams) => {
  return <LifeMap username={username} />;
};

export default HomePage;
