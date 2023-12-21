'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAtomValue } from 'jotai';

import BandiMoori from '@/assets/images/bandi-moori.png';
import { BottomSheet, Button, Typography } from '@/components/atoms';
import { useDeleteGoal } from '@/hooks/reactQuery/goal';

import { goalIdAtom } from './atom';

interface DeleteGoalButtomSheetProps {
  open: boolean;
  onClose: () => void;
}

export const DeleteGoalButtomSheet = ({ open, onClose }: DeleteGoalButtomSheetProps) => {
  const goalId = useAtomValue(goalIdAtom);
  const { mutate, isSuccess, isError } = useDeleteGoal();
  const router = useRouter();

  useEffect(() => {
    if (isError) {
      window.alert('목표 삭제에 실패했습니다.');
    }
    if (isSuccess) {
      onClose();
      router.back();
    }
  }, [isSuccess, isError, onClose, router]);

  const handleDelete = () => {
    if (!goalId) {
      return;
    }

    mutate({ goalId });
  };

  return (
    <BottomSheet
      open={open}
      onDismiss={onClose}
      fixedMaxHeight={520}
      FooterComponent={<Footer onCancel={onClose} onDelete={handleDelete} />}
    >
      <div className="h-[400px] flex flex-col items-center justify-center gap-3xs translate-y-[20px]">
        <Typography type="title1" className="text-gray-70">
          목표를 삭제하시겠어요?
        </Typography>
        <Typography type="body3" className="text-gray-50">
          삭제하면 다시 복구할 수 없어요
        </Typography>
        <Image src={BandiMoori} width={250} alt="bandi_moori" priority />
      </div>
    </BottomSheet>
  );
};

const Footer = ({ onCancel, onDelete }: { onCancel: VoidFunction; onDelete: VoidFunction }) => (
  <div className="flex flex-row gap-xs">
    <Button variant="tertiary" onClick={onCancel}>
      취소
    </Button>
    <Button variant="issue" onClick={onDelete}>
      삭제하기
    </Button>
  </div>
);
