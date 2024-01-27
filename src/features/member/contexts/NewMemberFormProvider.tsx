import { type PropsWithChildren, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { DevTool } from '@hookform/devtools';

import { useCreateMemberData, useGetMemberData } from '@/hooks/reactQuery/auth';
import { useIsMounted } from '@/hooks/useIsMounted';

import type { NewMemberFormValues } from '../types';

const NewMemberFormProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const isMounted = useIsMounted();
  const { mutate, isSuccess } = useCreateMemberData();
  const { data: memberData } = useGetMemberData();

  useEffect(() => {
    if (isSuccess) {
      router.push(`/home/${memberData?.username}`);
    }
  }, [isSuccess, memberData, router]);

  const methods = useForm<NewMemberFormValues>();

  const submit = (formData: NewMemberFormValues) => {
    const { nickname, birth } = formData;
    if (!nickname || !birth) return;

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

export default NewMemberFormProvider;
