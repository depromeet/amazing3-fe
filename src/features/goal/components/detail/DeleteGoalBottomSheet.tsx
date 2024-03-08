import Image from 'next/image';

import BandiMoori from '@/assets/images/bandi-moori.png';
import { BottomSheet, Button, Typography } from '@/components/atoms';
import { Spinner } from '@/components/atoms/spinner';
import { useGetMemberData } from '@/hooks/reactQuery/auth';
import { useDeleteGoal } from '@/hooks/reactQuery/goal';

interface DeleteGoalBottomSheetProps {
  open: boolean;
  onClose: () => void;
  goalId: number;
}

export const DeleteGoalBottomSheet = ({ open, onClose, goalId }: DeleteGoalBottomSheetProps) => {
  const { mutate, isPending } = useDeleteGoal();
  const { data } = useGetMemberData();

  const handleDelete = () => {
    if (!goalId) return;

    mutate({ goalId });
  };

  return (
    <BottomSheet
      open={open}
      onDismiss={onClose}
      fixedMaxHeight={480}
      FooterComponent={<Footer onCancel={onClose} onDelete={handleDelete} isPending={isPending} />}
    >
      <div className="flex flex-col items-center justify-center gap-3xs translate-y-[20px] pt-xs">
        <Typography type="title1" className="text-gray-70 text-center">
          {data?.nickname}님의 목표조각을 <br /> 삭제하시겠어요?
        </Typography>
        <Typography type="body3" className="text-gray-50">
          삭제하면 다시 복구할 수 없어요
        </Typography>
        <Image src={BandiMoori} width={180} alt="bandi_moori" priority />
      </div>
    </BottomSheet>
  );
};

const Footer = ({
  onCancel,
  onDelete,
  isPending,
}: {
  onCancel: VoidFunction;
  onDelete: VoidFunction;
  isPending: boolean;
}) => (
  <div className="flex flex-row gap-5xs px-4xs pb-4xs">
    <Button variant="tertiary" onClick={onCancel}>
      취소
    </Button>
    <Button variant="issue" onClick={onDelete} disabled={isPending}>
      {isPending ? <Spinner /> : '삭제하기'}
    </Button>
  </div>
);
