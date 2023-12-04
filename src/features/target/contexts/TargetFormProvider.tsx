import type { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { TargetFormValues } from '../types';

const TargetFormProvider = ({ children }: PropsWithChildren) => {
  const methods = useForm<TargetFormValues>();

  const submit = (data: TargetFormValues) => {
    // TODO: submit 동작 추가
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default TargetFormProvider;
