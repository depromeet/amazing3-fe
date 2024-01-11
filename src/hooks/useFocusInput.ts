import { useEffect, useRef } from 'react';

export const useFocusInput = (shouldFocus: boolean) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (shouldFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [shouldFocus]);

  return inputRef;
};
