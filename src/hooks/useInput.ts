import type { ChangeEvent } from 'react';
import { useState } from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => setValue('');

  return { value, handleChange, reset };
};
