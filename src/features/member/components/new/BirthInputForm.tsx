'use client';

import { useController, useFormContext } from 'react-hook-form';

import BirthIcon from '@/assets/icons/birth-icon.svg';
import { Button, Input } from '@/components';

import type { NewMemberFormValues } from '../../types';

import FormLayout from './FormLayout';

export const BirthInputForm = () => {
  const { register, getValues, control } = useFormContext<NewMemberFormValues>();
  const { field } = useController({ name: 'birth', control });
  const { onChange, value } = field;
  const { nickname } = getValues();

  const isEmpty = () => (value ? value.length === 0 : true);
  /**
   * TODO: 생년월일 검증 로직 추가
   */

  /**
   * TODO: API 연결 및 라우팅 추가
   */

  return (
    <FormLayout
      icon={<BirthIcon width={40} height={40} />}
      title={`반가워요, ${nickname}님!\n생년월일을 입력해 주세요.`}
      description="beta에서는 생년월일을 수정할 수 없어요."
    >
      <div className="mt-xs flex flex-col grow w-full">
        <div className="w-full h-full flex flex-col justify-between">
          <Input {...register('birth')} type="date" onChange={onChange} />
          <Button type="submit" disabled={isEmpty()}>
            완료
          </Button>
        </div>
      </div>
    </FormLayout>
  );
};
