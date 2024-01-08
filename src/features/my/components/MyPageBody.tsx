import Image from 'next/image';

import ForwardIcon from '@/assets/icons/forward-icon.svg';
import FeedbackIcon from '@/assets/images/feedback.png';
import { Typography } from '@/components';

const MyPageBody = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="mt-3xs px-3xs py-5xs w-[349px] flex flex-col bg-white rounded-lg">
        <button className="h-12 text-left border-b">
          <div className="flex justify-between items-center">
            <div className="flex gap-5xs items-center">
              <Image src={FeedbackIcon} width={24} height={24} alt="feedback-icon" priority />
              <Typography type="title4" className="text-gray-50">
                반디부디에게 피드백 보내기
              </Typography>
            </div>
            <ForwardIcon />
          </div>
        </button>
        <button className="h-12 text-left border-b">
          <Typography type="title4" className="text-gray-40">
            로그아웃
          </Typography>
        </button>
        <button className="h-12 text-left">
          <Typography type="title4" className="text-gray-40">
            탈퇴하기
          </Typography>
        </button>
      </div>
    </div>
  );
};

export default MyPageBody;