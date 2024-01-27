'use client';

import { useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import SmileIcon from '@/assets/icons/smile-iocn.svg';
import { Button, LimitedLengthInput } from '@/components';
import { MAX_NICKNAME_LENGTH } from '@/constants';
import { useGetMemberData } from '@/hooks/reactQuery/auth/useGetMemberData';
import { useIsMounted } from '@/hooks/useIsMounted';

import type { NewMemberFormValues } from '../../types';

import FormLayout from './FormLayout';

export const NicknameInputForm = () => {
  const isMounted = useIsMounted();
  const { register, control } = useFormContext<NewMemberFormValues>();
  const { field } = useController({ name: 'nickname', control });
  const { onChange, value } = field;
  const { data: memberData } = useGetMemberData();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (memberData) {
      const nickname = memberData.nickname;
      if (nickname) {
        router.push(`/home/${memberData?.username}`);
      } else {
        setIsReady(true);
      }
    }
  }, [memberData, router]);

  const isInvalidInput = () => (value ? value.length === 0 : true);

  return (
    isReady && (
      <FormLayout
        icon={<SmileIcon width={40} height={40} />}
        title="닉네임을 입력해 주세요."
        description="닉네임은 마이페이지에서 수정할 수 있어요."
      >
        <div className="mt-xs flex flex-col grow w-full">
          <div className="h-full flex flex-col justify-between">
            <div {...register('nickname')}>
              <LimitedLengthInput maxLength={MAX_NICKNAME_LENGTH} placeholder="닉네임" onChange={onChange} />
            </div>
            <Link href="/member/new/birth">
              <Button type="button" disabled={!isMounted || isInvalidInput()}>
                다음
              </Button>
            </Link>
          </div>
        </div>
      </FormLayout>
    )
  );
};
