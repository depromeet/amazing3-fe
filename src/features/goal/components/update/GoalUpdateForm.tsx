import { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

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
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {isMounted && <DevTool control={methods.control} />}
    </FormProvider>
  );
};

export default GoalUpdateForm;
