'use client';

import { useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { Button } from '@/components';
import { MAX_NICKNAME_LENGTH, MAX_USERNAME_LENGTH } from '@/constants';
import { DateInput } from '@/features/goal/components/new/DateInput';
import { TextInput } from '@/features/goal/components/new/TextInput';
import { isValidDateFormat } from '@/features/goal/utils/date';
import { useGetMemberData } from '@/hooks/reactQuery/auth';

import type { UpdateMemberDataFormValues } from '../../types';

import { FormLayout } from './FormLayout';
import Header from './Header';
import ProfileImageButton from './ProfileImageButton';

export const UpdateForm = () => {
  const { data: memberData } = useGetMemberData();

  const { register, setValue, control } = useFormContext<UpdateMemberDataFormValues>();
  const { field: imageField } = useController({ name: 'image', control });
  const { field: nicknameField } = useController({ name: 'nickname', control });
  const { field: birthField } = useController({ name: 'birth', control });
  const { field: usernameField } = useController({ name: 'username', control });
  const isValidBirth = birthField.value?.length ? isValidDateFormat(birthField.value) : true;

  const [defaultYYYY, defaultMM, defaultDD] = (memberData?.birth ?? '').split('-');

  const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);

  useEffect(() => {
    if (!memberData) return;

    setValue('image', memberData.image);
    setValue('nickname', memberData.nickname);
    setValue('username', memberData.username);
    setValue('birth', memberData.birth);
  }, [memberData, setValue]);

  useEffect(() => {
    if (
      !memberData ||
      imageField.value === undefined ||
      nicknameField.value === undefined ||
      usernameField.value === undefined
    )
      return;

    const isNotModified =
      memberData.image === imageField.value &&
      memberData.nickname === nicknameField.value &&
      memberData.username === usernameField.value &&
      (memberData.birth || '') === birthField.value;

    const isNotFilled =
      imageField.value.length === 0 || nicknameField.value.length === 0 || usernameField.value.length === 0;

    setIsDisabledSubmit(isNotFilled || isNotModified || !isValidBirth);
  }, [memberData, imageField, nicknameField, birthField, usernameField, isValidBirth]);

  return (
    <FormLayout
      header={<Header />}
      body={
        memberData &&
        birthField !== undefined && (
          <div className="pb-xl flex flex-col">
            <div className="flex justify-center">
              <ProfileImageButton image={imageField.value} control={control} />
            </div>
            <div className="pt-[26px] flex flex-col gap-3xs">
              <div {...register('nickname')}>
                <TextInput
                  labelName="닉네임"
                  maxLength={MAX_NICKNAME_LENGTH}
                  placeholder="닉네임"
                  value={nicknameField.value}
                  onChange={nicknameField.onChange}
                />
              </div>
              <div {...register('birth')}>
                <DateInput
                  labelName="생년월일"
                  initialValue={{ YYYY: defaultYYYY, MM: defaultMM, DD: defaultDD }}
                  onChange={birthField.onChange}
                />
              </div>
              <div {...register('username')}>
                <TextInput
                  labelName="아이디"
                  maxLength={MAX_USERNAME_LENGTH}
                  placeholder="아이디"
                  value={usernameField.value}
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
