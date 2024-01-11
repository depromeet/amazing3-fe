import { Star } from '@/components';

export const StarBg = () => {
  return (
    <>
      <Star size={24} position={{ x: 'left-[69px]', y: 'top-[12px]' }} />
      <Star size={24} position={{ x: 'right-[69px]', y: 'top-[86px]' }} />
      <Star size={19} position={{ x: 'left-[41px]', y: 'top-[164px]' }} />
      <Star size={19} position={{ x: 'right-[31px]', y: 'top-[202px]' }} />
    </>
  );
};
