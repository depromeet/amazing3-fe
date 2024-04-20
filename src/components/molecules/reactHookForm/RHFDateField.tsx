import { type InputHTMLAttributes, useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Input, Typography } from '@/components/atoms';

export interface DateFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  isDayIncluded?: boolean;
}

export const RHFDateField = ({ label, helperText, isDayIncluded = false }: DateFieldProps) => {
  return (
    <div className="space-y-5xs">
      {label && <Label label={label} />}
      <div className="grid grid-cols-3 gap-2">
        <YearField />
        <MonthField />
        {isDayIncluded && <DayField />}
        {helperText && <HelperText text={helperText} />}
      </div>
    </div>
  );
};

RHFDateField.displayName = 'RHFDateField';

const Label = ({ label }: { label: string }) => (
  <div className="flex justify-between items-center">
    <Typography type="title3" className="text-gray-50">
      {label}
    </Typography>
  </div>
);

const YearField = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="year"
      control={control}
      rules={{ required: 'Year is required' }}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...field}
          type="text"
          inputMode="numeric"
          maxLength={4}
          id="year"
          placeholder="YYYY"
          aria-invalid={error ? 'true' : 'false'}
        />
      )}
    />
  );
};

const MonthField = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="month"
      control={control}
      rules={{ required: 'Month is required', min: 1, max: 12 }}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...field}
          type="text"
          inputMode="numeric"
          maxLength={2}
          id="month"
          placeholder="MM"
          aria-invalid={error ? 'true' : 'false'}
        />
      )}
    />
  );
};

const DayField = () => {
  const { control, watch } = useFormContext();
  const year = watch('year');
  const month = watch('month');

  // State to hold the maximum number of days for the current month/year
  const [maxDays, setMaxDays] = useState(31);

  useEffect(() => {
    if (!year || !month) return;

    // Calculate the maximum number of days in the given month/year
    const daysInMonth = new Date(year, month, 0).getDate();
    setMaxDays(daysInMonth);
  }, [year, month]);

  return (
    <Controller
      name="day"
      control={control}
      rules={{ required: 'Day is required', min: 1, max: maxDays }}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...field}
          type="number"
          id="day"
          placeholder="DD"
          min="1"
          max={maxDays}
          aria-invalid={error ? 'true' : 'false'}
        />
      )}
    />
  );
};

const HelperText = ({ text }: { text: string }) => (
  <div className="flex flex-col justify-center px-5xs">
    <Typography type="body3" className="text-gray-40">
      {text}
    </Typography>
  </div>
);
