import Image from 'next/image';
import { useOverlay } from '@toss/use-overlay';

import ForwardIcon from '@/assets/icons/forward-icon.svg';
import FeedbackIcon from '@/assets/images/feedback.png';
import { Typography } from '@/components';

import { USER_FEEDBACK_GOOGLE_FORM_URL } from '../constants';

import { LogoutBottomSheet } from './logoutBottomSheet';
import { WithdrawBottomSheet } from './withdrawBottomSheet';

const MyPageBody = () => {
  const { open } = useOverlay();
  const handleClickSendFeedback = () => {
    window.open(USER_FEEDBACK_GOOGLE_FORM_URL);
  };
  const handleOpenLogoutBottomSheet = () => {
    open(({ isOpen, close }) => <LogoutBottomSheet open={isOpen} onClose={close} />);
  };
  const handleOpenWithdrawBottomSheet = () => {
    open(({ isOpen, close }) => <WithdrawBottomSheet open={isOpen} onClose={close} />);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="mt-3xs px-3xs py-5xs w-[349px] flex flex-col bg-white rounded-lg shadow-[0_1.001px_40px_0_rgba(197,229,255,0.3)]">
        <button className="h-12 text-left border-b" onClick={handleClickSendFeedback}>
          <div className="flex justify-between items-center">
            <div className="flex gap-5xs items-center">
              <Image src={FeedbackIcon} width={24} height={24} alt="feedback-icon" priority />
              <Typography type="title4" className="text-gray-50">
                반디부디에게 피드백 보내기
              </Typography>
            </div>
            <ForwardIcon fill="#8490A0" />
          </div>
        </button>
        <button className="h-12 text-left border-b" onClick={handleOpenLogoutBottomSheet}>
          <Typography type="title4" className="text-gray-40">
            로그아웃
          </Typography>
        </button>
        <button className="h-12 text-left" onClick={handleOpenWithdrawBottomSheet}>
          <Typography type="title4" className="text-gray-40">
            탈퇴하기
          </Typography>
        </button>
      </div>
    </div>
  );
};

export default MyPageBody;
