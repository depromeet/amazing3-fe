'use client';

import { useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { Button } from '@/components';
import { MAX_DATE_LENGTH_UNTIL_DAY, MAX_NICKNAME_LENGTH, MAX_USERNAME_LENGTH } from '@/constants';
import { DateInput } from '@/features/goal/components/new/DateInput';
import { TextInput } from '@/features/goal/components/new/TextInput';
import { useGetMemberData } from '@/hooks/reactQuery/auth';

import type { UpdateMemberDataFormValues } from '../../types';

import { FormLayout } from './FormLayout';
import Header from './Header';
import ProfileImageButton from './ProfileImageButton';

export const UpdateForm = () => {
  const { data: memberData } = useGetMemberData();

  const { register, setValue, control } = useFormContext<UpdateMemberDataFormValues>();
  const { field: nicknameField } = useController({ name: 'nickname', control });
  const { field: birthField } = useController({ name: 'birth', control });
  const { field: usernameField } = useController({ name: 'username', control });

  const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);

  useEffect(() => {
    if (!memberData) return;

    setValue('nickname', memberData.nickname);
    setValue('username', memberData.username);
    setValue('birth', memberData.birth);
  }, [memberData, setValue]);

  useEffect(() => {
    if (
      !memberData ||
      nicknameField.value === undefined ||
      usernameField.value === undefined ||
      birthField.value === undefined
    )
      return;

    const isNotModified =
      memberData.nickname === nicknameField.value &&
      memberData.username === usernameField.value &&
      memberData.birth === birthField.value;

    const isNotFilled =
      nicknameField.value.length === 0 || usernameField.value.length === 0 || birthField.value.length !== 10;

    setIsDisabledSubmit(isNotFilled || isNotModified);
  }, [memberData, nicknameField, birthField, usernameField]);

  return (
    <FormLayout
      header={<Header />}
      body={
        memberData && (
          <div className="pb-xl flex flex-col">
            <div className="flex justify-center">
              <ProfileImageButton image={memberData.image} />
            </div>
            <div className="pt-[26px] flex flex-col gap-3xs">
              <div {...register('nickname')}>
                <TextInput
                  labelName="닉네임"
                  maxLength={MAX_NICKNAME_LENGTH}
                  placeholder="닉네임"
                  value={memberData.nickname}
                  onChange={nicknameField.onChange}
                />
              </div>
              <div {...register('birth')}>
                <DateInput
                  labelName="생년월일"
                  intitalValue={memberData.birth}
                  maxLength={MAX_DATE_LENGTH_UNTIL_DAY}
                  onChange={birthField.onChange}
                />
              </div>
              <div {...register('username')}>
                <TextInput
                  labelName="아이디"
                  maxLength={MAX_USERNAME_LENGTH}
                  placeholder="아이디"
                  value={memberData.username}
                  onChange={usernameField.onChange}
                />
              </div>
            </div>
          </div>
        )
      }
      footer={
        <Button type="submit" disabled={isDisabledSubmit}>
          저장
        </Button>
      }
    />
  );
};
