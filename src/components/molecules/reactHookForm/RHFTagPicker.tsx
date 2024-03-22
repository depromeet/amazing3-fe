import { Controller, useFormContext } from 'react-hook-form';

import { Spinner } from '@/components/atoms/spinner';
import { Tag } from '@/components/atoms/tag';
import { Typography } from '@/components/atoms/typography';

interface TagPickerProps {
  name: string;
  label?: string;
  tags: TagsProps[] | undefined;
}

export interface TagsProps {
  id: number;
  content: string;
}

export const RHFTagPicker = ({ name, label, tags }: TagPickerProps) => {
  const { control } = useFormContext();

  return (
    <div className="space-y-5xs">
      {label && <Label label={label} />}
      {tags ? (
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className="flex flex-wrap gap-5xs overflow-auto">
              {tags.map(({ id, content }) => (
                <Tag key={id} isFocus={value == id} onClick={() => onChange(id)}>
                  {content}
                </Tag>
              ))}
            </div>
          )}
        />
      ) : (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};
RHFTagPicker.displayName = 'RHFTagPicker';

const Label = ({ label }: { label: string }) => (
  <div className="flex justify-between items-center">
    <Typography type="title3" className="text-gray-50">
      {label}
    </Typography>
  </div>
);
