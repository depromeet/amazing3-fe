import { Controller, useFormContext } from 'react-hook-form';
import Image from 'next/image';

import { Spinner } from '@/components/atoms/spinner';
import { Typography } from '@/components/atoms/typography';

import { RHFTagPicker } from './RHFTagPicker';

interface ImagePickerProps {
  name: string;
  label?: string;
  images: ImagesProps[] | undefined;
}

interface ImagesProps {
  id: number;
  name: string;
  url: string;
}

export const RHFImagePicker = ({ name, label, images }: ImagePickerProps) => {
  const { control } = useFormContext();

  return (
    <div className="space-y-5xs">
      {label && <Label label={label} />}
      {images ? (
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className="grid grid-cols-3 gap-3xs">
              {images.map(({ id, name, url }) => (
                <button
                  key={id}
                  className="flex flex-col items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    onChange(url);
                  }}
                >
                  <div className={`p-5xs rounded-lg ${value === url && 'bg-blue-10'}`}>
                    <Image src={url} alt={name} width={150} height={150} priority />
                  </div>
                </button>
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
RHFTagPicker.displayName = 'RHFImagePicker';

const Label = ({ label }: { label: string }) => (
  <div className="flex justify-between items-center">
    <Typography type="title3" className="text-gray-50">
      {label}
    </Typography>
  </div>
);
