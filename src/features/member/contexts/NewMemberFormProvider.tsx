import type { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { DevTool } from '@hookform/devtools';

import { useCreateMemberData } from '@/hooks/reactQuery/auth';
import { useIsMounted } from '@/hooks/useIsMounted';

import type { NewMemberFormValues } from '../types';

const NewMemberFormProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const isMounted = useIsMounted();
  const { mutate } = useCreateMemberData();

  const methods = useForm<NewMemberFormValues>();

  const submit = (formData: NewMemberFormValues) => {
    const { nickname, birth } = formData;
    if (!nickname || !birth) return;

    mutate(formData);
    router.push('/home');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>

      {isMounted && <DevTool control={methods.control} />}
    </FormProvider>
  );
};

export default NewMemberFormProvider;
