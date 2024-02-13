import { type PropsWithChildren, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { DevTool } from '@hookform/devtools';

import { useGetMemberData, useUpdateMemberData } from '@/hooks/reactQuery/auth';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useToast } from '@/hooks/useToast';

import type { UpdateMemberDataFormValues } from '../types';

const UpdateMemberDataFormProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const isMounted = useIsMounted();
  const { data: memberData } = useGetMemberData();
  const { mutate, isSuccess } = useUpdateMemberData();
  const methods = useForm<UpdateMemberDataFormValues>();
  const toast = useToast();

  useEffect(() => {
    if (isSuccess) {
      router.push('/my');
    }
  }, [isSuccess, router, methods]);

  const submit = (formData: UpdateMemberDataFormValues) => {
    const { nickname, username, birth } = formData;
    if (!nickname || !username || !birth) return;

    // TODO: react-hook-form을 사용하는 input field는 별도로 component로 분리해서 에러 상태에 대한 처리를 할 수 있도록 수정
    if (memberData?.username !== username && username.toUpperCase().startsWith('BANDIBOODI-')) {
      toast.warning('BANDIBOODI-로 시작하는 닉네임은 사용할 수 없습니다.');
      return;
    }

    // Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.
    if (!/^[a-zA-Z0-9]+(-?[a-zA-Z0-9])*[a-zA-Z0-9]$/.test(username)) {
      toast.warning('닉네임은 영문, 숫자, 하이픈(-)만 사용할 수 있고, 하이픈(-)은 처음과 끝에 사용할 수 없습니다.');
      return;
    }

    // Convert birth from "YYYY.MM.DD" to "YYYY-MM-DD"
    // TODO: 서버에서 YYYY.MM.DD 형식을 지원하면 이 부분 삭제
    const convertedBirth = birth.replace(/\./g, '-');

    mutate({ ...formData, birth: convertedBirth });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>

      {isMounted && <DevTool control={methods.control} />}
    </FormProvider>
  );
};

export default UpdateMemberDataFormProvider;
