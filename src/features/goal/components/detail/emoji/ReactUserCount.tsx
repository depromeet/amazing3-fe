import Image from 'next/image';
import { useOverlay } from '@toss/use-overlay';

import ReactionMembersImage from '@/assets/images/reaction-members.png';
import { Typography } from '@/components';
import { addSuffixIfExceedsLength, addSuffixIfExceedsLimit } from '@/utils/suffix';

import { ReactUserBottomSheet } from './BottomSheet/ReactUserBottomSheet';

interface ReactionMemberCountProps {
  username: string;
  count: number;
}

export const ReactUserCount = ({ username, count }: ReactionMemberCountProps) => {
  const { open } = useOverlay();
  const countExceptOne = count - 1;

  const visibleValue = {
    username: addSuffixIfExceedsLength(username, 3, '..'),
    count: addSuffixIfExceedsLimit(countExceptOne, 999),
  };

  const showText = () => {
    if (countExceptOne === 0) {
      return `${visibleValue.username}님이 목표에 반응했어요.`;
    }
    return (
      <>
        {visibleValue.username}님 외&nbsp;
        <span className="text-blue-50">{visibleValue.count}</span>명이 목표에 반응했어요.
      </>
    );
  };

  const handleOpenMembersBottomSheet = () => {
    open(({ isOpen, close }) => <ReactUserBottomSheet open={isOpen} onClose={close} />);
  };

  return (
    <button
      className="w-full flex justify-center items-center rounded-[12px] bg-gray-10 gap-5xs py-5xs"
      onClick={handleOpenMembersBottomSheet}
    >
      <Image src={ReactionMembersImage} width={54} height={36} alt="reaction_members_image" />
      <div className="flex">
        <Typography type="body3">{showText()}</Typography>
      </div>
    </button>
  );
};
