import { useIsMyMap } from '@/hooks';

import { PrivateTimeline } from './PrivateTimeline';
import { PublicTimeline } from './PublicTimeline';

export const Timeline = () => {
  const { isMyMap } = useIsMyMap();

  return isMyMap ? <PrivateTimeline /> : <PublicTimeline />;
};
