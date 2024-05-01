import { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { DevTool } from '@hookform/devtools';

import { Button } from '@/components';
import { Spinner } from '@/components/atoms/spinner';
import { RHFTextField } from '@/components/molecules/reactHookForm';
import { RHFDateField } from '@/components/molecules/reactHookForm/RHFDateField';
import { RHFImagePicker } from '@/components/molecules/reactHookForm/RHFImagePicker';
import { RHFTagPicker } from '@/components/molecules/reactHookForm/RHFTagPicker';
import type { GoalResponse } from '@/hooks/reactQuery/goal/useGetGoal';
import { useUpdateGoal } from '@/hooks/reactQuery/goal/useUpdateGoal';
import { useGetStickers } from '@/hooks/reactQuery/sticker';
import { useGetTags } from '@/hooks/reactQuery/tag';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useToast } from '@/hooks/useToast';
import { FormLayout } from '@/layout/FormLayout';
import { isValidDate } from '@/utils/date';
import { hasWhitespace } from '@/utils/hasWhitespace';
import { isOnlyWhitespace } from '@/utils/isOnlyWhitespace';

import GoalUpdateHeader from './GoalUpdateHeader';

interface GoalUpdateFormProps {
  goalId: number;
  goal: GoalResponse;
}

export const GoalUpdateForm = ({ goalId, goal }: GoalUpdateFormProps) => {
  const isMounted = useIsMounted();
  const { mutateAsync } = useUpdateGoal({ goalId });
  const { data: tagsData } = useGetTags();
  const { data: stickerData } = useGetStickers();
  const router = useRouter();
  const toast = useToast();

  const defaultValues = useMemo(
    () => ({
      title: goal.title,
      year: goal.deadline.split('.')[0],
      month: goal.deadline.split('.')[1],
      tag: goal.tagInfo.tagId,
      description: goal.description,
      sticker: goal.stickerUrl,
    }),
    [goal],
  );

  const methods = useForm({ defaultValues });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (!data.title || !data.year || !data.month || !data.tag || !data.sticker) {
        // TODO: Input field가 error를 처리할 수 있게 되면 toast 제거
        toast.warning('필수 항목을 입력해 주세요.');
        return;
      }

      if (isOnlyWhitespace(data.title) || isOnlyWhitespace(data.description)) {
        toast.warning('한줄 목표 혹은 메모에 공백 문자만이 존재하는지 확인해주세요.');
        return;
      }

      if (!isValidDate(data.year, data.month)) {
        // validate deadline
        toast.warning('유효한 날짜를 입력해 주세요.');
        return;
      }

      if (hasWhitespace(`${data.year}${data.month}`)) {
        toast.warning('날짜에는 공백을 포함할 수 없습니다.');
        return;
      }

      // validate tag
      const tag = tagsData?.find(({ id }) => id === data.tag);
      if (tag === undefined) {
        toast.warning('유효한 태그를 선택해 주세요.');
        return;
      }

      // validate sticker url
      const sticker = stickerData?.find(({ url }) => url === data.sticker);
      if (sticker === undefined) {
        toast.warning('유효한 스티커를 선택해 주세요.');
        return;
      }

      await mutateAsync({
        title: data.title,
        yearOfDeadline: data.year,
        monthOfDeadline: data.month,
        tagId: data.tag,
        stickerId: sticker.id,
        description: data.description,
      });
      router.back();
      reset();
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <FormLayout
          header={<GoalUpdateHeader />}
          body={
            <div className="py-sm flex flex-col space-y-sm">
              <RHFTextField name="title" label="한줄목표" maxLength={30} />
              <RHFDateField label="날짜" helperText="까지 이룰 거예요." isDayIncluded={false} />
              <RHFTagPicker name="tag" label="태그" tags={tagsData?.map(({ id, content }) => ({ id, content }))} />
              <RHFImagePicker
                name="sticker"
                label="스티커"
                images={stickerData?.map(({ id, name, url }) => ({ id, name, url }))}
              />
              <RHFTextField name="description" label="메모" maxLength={300} rows={4} />
            </div>
          }
          footer={<Button disabled={isSubmitting}>{isSubmitting ? <Spinner /> : '저장'}</Button>}
        />
      </form>
      {isMounted && <DevTool control={methods.control} />}
    </FormProvider>
  );
};

export default GoalUpdateForm;
