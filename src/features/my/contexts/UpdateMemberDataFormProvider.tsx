import { type PropsWithChildren, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { DevTool } from '@hookform/devtools';

import { useUpdateMemberData } from '@/hooks/reactQuery/auth';
import { useIsMounted } from '@/hooks/useIsMounted';

import type { UpdateMemberDataFormValues } from '../types';

const UpdateMemberDataFormProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const isMounted = useIsMounted();
  const { mutate, isSuccess } = useUpdateMemberData();
  const methods = useForm<UpdateMemberDataFormValues>();

  useEffect(() => {
    if (isSuccess) {
      router.push('/my');
    }
  }, [isSuccess, router, methods]);

  const submit = (formData: UpdateMemberDataFormValues) => {
    const { nickname, username, birth } = formData;
    if (!nickname || !username || !birth) return;

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
