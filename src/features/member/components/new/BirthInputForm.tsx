'use client';

import { useController, useFormContext } from 'react-hook-form';

import BirthIcon from '@/assets/icons/birth-icon.svg';
import { Button } from '@/components';
import { MAX_DATE_LENGTH_UNTIL_DAY } from '@/constants';
import { DateInput } from '@/features/goal/components/new/DateInput';

import type { NewMemberFormValues } from '../../types';

import FormLayout from './FormLayout';

export const BirthInputForm = () => {
  const { register, getValues, control } = useFormContext<NewMemberFormValues>();
  const { field } = useController({ name: 'birth', control });
  const { onChange, value } = field;
  const { nickname } = getValues();

  const isValidInput = () => (value ? value.length !== MAX_DATE_LENGTH_UNTIL_DAY : true);

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
          <Button type="submit" disabled={isValidInput()}>
            완료
          </Button>
        </div>
      </div>
    </FormLayout>
  );
};
