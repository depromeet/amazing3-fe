import Image from 'next/image';
import { useOverlay } from '@toss/use-overlay';
import { useAtomValue } from 'jotai';

import ArrowIcon from '@/assets/icons/arrow-icons.svg';
import ReactionMembersImage from '@/assets/images/reaction-members.png';
import { Typography } from '@/components';
import { ReactUserBottomSheet } from '@/features/emoji/BottomSheet';
import { goalIdAtom } from '@/features/goal/atom';
import { formatOver999 } from '@/utils/number';
import { formatOverLength } from '@/utils/string';

interface ReactionUserTotalCountProps {
  username: string;
  count: number;
}

export const ReactionUserTotalCount = ({ username, count }: ReactionUserTotalCountProps) => {
  const goalId = useAtomValue(goalIdAtom);
  const { open } = useOverlay();
  const countExceptOne = count - 1;

  const ShowText = () => {
    if (countExceptOne === 0) {
      return `${formatOverLength(username, 2)}님이 목표에 반응했어요.`;
    }
    return (
      <>
        {formatOverLength(username, 2)}님 외&nbsp;
        <span className="text-blue-50">{formatOver999(countExceptOne)}</span>명이 반응했어요.
      </>
    );
  };

  const handleOpenMembersBottomSheet = () => {
    open(({ isOpen, close }) => <ReactUserBottomSheet goalId={goalId} open={isOpen} onClose={close} />);
  };

  return (
    <button
      className="relative w-full flex justify-center items-center rounded-[12px] bg-gray-10 gap-5xs py-5xs"
      onClick={handleOpenMembersBottomSheet}
    >
      <Image src={ReactionMembersImage} width={54} height={36} alt="reaction_members_image" />
      <Typography type="body3">
        <ShowText />
      </Typography>
      <ArrowIcon width="24" height="24" className="absolute right-[10px] rotate-180 ml-auto" />
    </button>
  );
};
