import type { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import { useIsMounted } from '@/hooks/useIsMounted';

import type { NewMemberFormValues } from '../types';

const CreateGoalFormProvider = ({ children }: PropsWithChildren) => {
  const isMounted = useIsMounted();

  const methods = useForm<NewMemberFormValues>();

  const submit = (data: NewMemberFormValues) => {
    // TODO: submit 동작 추가
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>

      {isMounted && <DevTool control={methods.control} />}
    </FormProvider>
  );
};

export default CreateGoalFormProvider;
