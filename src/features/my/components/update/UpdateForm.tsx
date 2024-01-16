'use client';

import { useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { Button, Typography } from '@/components';
import { MAX_DATE_LENGTH_UNTIL_DAY } from '@/constants';
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

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (!memberData) return;

    setValue('nickname', memberData.nickname);
    setValue('username', memberData.username);
    setValue('birth', memberData.birth);
  }, [memberData, setValue]);

  useEffect(() => {
    if (!memberData || !nicknameField.value || !usernameField.value || !birthField.value) return;

    console.log(memberData.nickname, memberData.username, memberData.birth);
    console.log(nicknameField.value, usernameField.value, birthField.value);

    setIsDisabled(
      memberData.nickname === nicknameField.value &&
        memberData.username === usernameField.value &&
        memberData.birth === birthField.value,
    );
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
                  maxLength={10}
                  placeholder="닉네임"
                  value={memberData.nickname}
                  onChange={nicknameField.onChange}
                />
              </div>
              <div {...register('birth')} className="flex flex-col gap-5xs">
                <Typography type="title3" className="text-gray-50">
                  생년월일
                </Typography>
                <DateInput
                  intitalValue={memberData.birth}
                  maxLength={MAX_DATE_LENGTH_UNTIL_DAY}
                  onChange={birthField.onChange}
                />
              </div>
              <div {...register('username')}>
                <TextInput
                  labelName="아이디"
                  maxLength={15}
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
        <Button type="submit" disabled={isDisabled}>
          저장
        </Button>
      }
    />
  );
};
