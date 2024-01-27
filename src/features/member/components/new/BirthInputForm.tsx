'use client';

import { useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import BirthIcon from '@/assets/icons/birth-icon.svg';
import { Button } from '@/components';
import { MAX_DATE_LENGTH_UNTIL_DAY } from '@/constants';
import { DateInput } from '@/features/goal/components/new/DateInput';
import { useToast } from '@/hooks/useToast';

import type { NewMemberFormValues } from '../../types';

import FormLayout from './FormLayout';

export const BirthInputForm = () => {
  const toast = useToast();
  const router = useRouter();
  const { register, getValues, control } = useFormContext<NewMemberFormValues>();
  const { field } = useController({ name: 'birth', control });
  const { onChange, value } = field;
  const { nickname } = getValues();
  const [isValidBirth, setIsValidBirth] = useState(false);

  useEffect(() => {
    if (!nickname) {
      router.push('/member/new/nickname');
    }
  }, []);

  useEffect(() => {
    if (value) {
      if (value.length === MAX_DATE_LENGTH_UNTIL_DAY) {
        const today = new Date();
        const inputValue = new Date(value);

        if (today < inputValue) {
          toast.warning('올바른 생년월일을 입력해주세요.');
          setIsValidBirth(false);
          return;
        }
      }
      setIsValidBirth(value.length === MAX_DATE_LENGTH_UNTIL_DAY);
    }
  }, [value]);

  return (
    <FormLayout
      icon={<BirthIcon width={40} height={40} />}
      title={`반가워요, ${nickname}님!\n생년월일을 입력해 주세요.`}
      description="beta에서는 생년월일을 수정할 수 없어요."
    >
      <div className="mt-xs flex flex-col grow w-full">
        <div className="w-full h-full flex flex-col justify-between">
          <div {...register('birth')}>
            <DateInput maxLength={MAX_DATE_LENGTH_UNTIL_DAY} onChange={onChange} />
          </div>
          <Button type="submit" disabled={!isValidBirth}>
            완료
          </Button>
        </div>
      </div>
    </FormLayout>
  );
};
