import { useEffect, useState } from 'react';

import { MAX_DATE_LENGTH_UNTIL_DAY } from '@/constants';

import { useToast } from './useToast';

export const useValidBirth = (value?: string) => {
  const toast = useToast();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (value) {
      if (value.length === MAX_DATE_LENGTH_UNTIL_DAY) {
        const today = new Date();
        const inputValue = new Date(value);

        if (today < inputValue) {
          toast.warning('올바른 생년월일을 입력해주세요.');
          setIsValid(false);
          return;
        }
      }
      setIsValid(value.length === MAX_DATE_LENGTH_UNTIL_DAY);
    }
  }, [value]);

  return isValid;
};
