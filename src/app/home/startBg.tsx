'use client';

import { Star } from '@/components';

const StarBg = () => {
  return (
    <>
      <Star size={19} position={{ x: 'left-[171px]', y: 'top-[189px]' }} />
      <Star size={15} position={{ x: 'right-[23px]', y: 'top-[168px]' }} color="blue" />
      <Star size={15} position={{ x: 'left-[53px]', y: 'top-[368px]' }} />
      <Star size={26} position={{ x: 'left-[116px]', y: 'top-[370px]' }} color="blue" />
      <Star size={16} position={{ x: 'right-[41px]', y: 'top-[465px]' }} color="blue" />
      <Star size={26} position={{ x: 'left-[123px]', y: 'top-[630px]' }} color="blue" />
      <Star size={15} position={{ x: 'left-[24px]', y: 'top-[603px]' }} color="blue" />
      <Star size={26} position={{ x: 'right-[48px]', y: 'top-[630px]' }} color="blue" />
    </>
  );
};

export default StarBg;
