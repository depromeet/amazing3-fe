import { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import { RHFTextField } from '@/components/molecules/reactHookForm';
import { useUpdateGoal } from '@/hooks/reactQuery/goal/useUpdateGoal';
import { useIsMounted } from '@/hooks/useIsMounted';

export const GoalUpdateForm = ({ goalId }: { goalId: number }) => {
  const isMounted = useIsMounted();
  const { mutate, isSuccess } = useUpdateGoal({ goalId });

  const defaultValues = useMemo(
    () => ({
      title: '',
      deadline: '',
      tagId: '',
      description: '',
      stickerUrl: '',
    }),
    [],
  );

  const methods = useForm({ defaultValues });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      mutate(data);
      reset();
      // router.push(`/goal/detail/${goalId}`);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <RHFTextField name="title" label="목표 제목" />
      </form>
      {isMounted && <DevTool control={methods.control} />}
    </FormProvider>
  );
};

export default GoalUpdateForm;
