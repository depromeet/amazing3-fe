import type { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import { useIsMounted } from '@/hooks/useIsMounted';

import type { TargetFormValues } from '../types';

const TargetFormProvider = ({ children }: PropsWithChildren) => {
  const isMounted = useIsMounted();

  const methods = useForm<TargetFormValues>();

  const submit = (data: TargetFormValues) => {
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

export default TargetFormProvider;
