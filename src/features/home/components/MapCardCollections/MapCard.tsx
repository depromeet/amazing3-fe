import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useOverlay } from '@toss/use-overlay';

import { Typography } from '@/components';
import { blueDataURL } from '@/constants';
import { useAuth } from '@/hooks';
import type { GoalProps } from '@/hooks/reactQuery/goal/useGetGoals';

import { LoginBottomSheet } from '../loginBottomSheet';

import { MapCardLayout, type MapCardLayoutProps } from './MapCardLayout';

export interface MapCardProps extends MapCardLayoutProps {
  goal: GoalProps;
}

export const MapCard = ({ goal, position }: MapCardProps) => {
  const { id, title, stickerUrl } = goal;
  const router = useRouter();
  const pathname = usePathname();
  const { isLoggedIn } = useAuth();
  const { open } = useOverlay();

  const handleMapCardClick = () => {
    if (isLoggedIn) {
      router.push(`/goal/detail/${id}?previous=${pathname}`);
    } else {
      open(({ isOpen, close }) => <LoginBottomSheet open={isOpen} onClose={close} />);
    }
  };

  return (
    <button onClick={handleMapCardClick}>
      <MapCardLayout position={position}>
        <Image
          src={stickerUrl}
          width={100}
          height={100}
          alt="sticker"
          priority
          placeholder="blur"
          blurDataURL={blueDataURL.mapCard}
        />
        <div className="flex max-w-[114px] gap-[4px] px-[3px] justify-center items-center">
          <Typography type="title5" className="text-blue-50 text-ellipsis !whitespace-nowrap overflow-hidden">
            {title}
          </Typography>
        </div>
      </MapCardLayout>
    </button>
  );
};
