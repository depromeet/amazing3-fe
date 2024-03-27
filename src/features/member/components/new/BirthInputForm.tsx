'use client';

import { useEffect } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import BirthIcon from '@/assets/icons/birth-icon.svg';
import { Button } from '@/components';
import { DateInput } from '@/features/goal/components/new/DateInput';
import { isValidDateFormat } from '@/features/goal/utils/date';

import type { NewMemberFormValues } from '../../types';

import FormLayout from './FormLayout';

export const BirthInputForm = () => {
  const router = useRouter();
  const { register, getValues, control } = useFormContext<NewMemberFormValues>();
  const { field } = useController({ name: 'birth', control });
  const { onChange, value } = field;
  const { nickname } = getValues();

  useEffect(() => {
    if (!nickname) {
      router.push('/member/new/nickname');
    }
  }, []);

  return (
    <FormLayout
      icon={<BirthIcon width={40} height={40} />}
      title={`반가워요, ${nickname}님!\n생년월일을 입력해 주세요.`}
      description="생년월일은 마이페이지에서 수정할 수 있어요."
    >
      <div className="mt-xs flex flex-col grow w-full">
        <div className="w-full h-full flex flex-col justify-between">
          <div {...register('birth')}>
            <DateInput onChange={onChange} />
          </div>
          <Button type="submit" disabled={value?.length ? !isValidDateFormat(value) : false}>
            {value?.length ? '완료' : '건너뛰기'}
          </Button>
        </div>
      </div>
    </FormLayout>
  );
};
