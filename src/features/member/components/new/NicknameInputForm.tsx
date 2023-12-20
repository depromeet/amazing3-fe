'use client';

import { useController, useFormContext } from 'react-hook-form';
import Link from 'next/link';

import SmileIcon from '@/assets/icons/smile-iocn.svg';
import { Button, LimitedLengthInput } from '@/components';
import { MAX_NICKNAME_LENGTH } from '@/constants';
import { useIsMounted } from '@/hooks/useIsMounted';

import type { NewMemberFormValues } from '../../types';

import FormLayout from './FormLayout';

export const NicknameInputForm = () => {
  const isMounted = useIsMounted();
  const { register, control } = useFormContext<NewMemberFormValues>();
  const { field } = useController({ name: 'nickname', control });
  const { onChange, value } = field;

  const isEmpty = () => (value ? value.length === 0 : true);

  return (
    <FormLayout
      icon={<SmileIcon width={40} height={40} />}
      title="닉네임을 입력해 주세요."
      description="beta에서는 닉네임을 수정할 수 없어요."
    >
      <div className="mt-xs flex flex-col grow w-full">
        <div className="h-full flex flex-col justify-between">
          <div {...register('nickname')}>
            <LimitedLengthInput maxLength={MAX_NICKNAME_LENGTH} placeholder="닉네임" onChange={onChange} />
          </div>
          <Link href="/member/new/birthday">
            <Button type="button" disabled={!isMounted || isEmpty()}>
              다음
            </Button>
          </Link>
        </div>
      </div>
    </FormLayout>
  );
};
