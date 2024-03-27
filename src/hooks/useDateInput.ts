import type { ChangeEvent, FocusEvent } from 'react';
import { useRef, useState } from 'react';

export type DateProps = 'YYYY' | 'MM' | 'DD';

export type DateValueProps = Record<DateProps, string>;

interface UseDateInputProps {
  initialValue: DateValueProps;
}

export const typeToMaxLength: Record<DateProps, number> = {
  YYYY: 4,
  MM: 2,
  DD: 2,
} as const;

export const useDateInput = ({ initialValue }: UseDateInputProps) => {
  const [dateValues, setDateValues] = useState<DateValueProps>(initialValue);

  const yearInputRef = useRef<HTMLInputElement>(null);
  const monthInputRef = useRef<HTMLInputElement>(null);
  const dayInputRef = useRef<HTMLInputElement>(null);

  const inputRefs = {
    YYYY: yearInputRef,
    MM: monthInputRef,
    DD: dayInputRef,
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, type: DateProps) => {
    let inputValue = event.target.value;

    if (type === 'YYYY' && inputValue.length === typeToMaxLength[type]) {
      monthInputRef.current?.focus();
    }

    if (type === 'MM') {
      inputValue = +inputValue > 12 ? '12' : inputValue;
      if (inputValue.length === typeToMaxLength.MM) dayInputRef.current?.focus();
    }

    setDateValues((prev) => ({ ...prev, [type]: inputValue }));
  };

  const handleInputBlur = (event: FocusEvent<HTMLInputElement>, type: DateProps) => {
    const inputValue = event.target.value;

    if ((type === 'MM' || type === 'DD') && inputValue.length === 1) {
      setDateValues((prev) => ({ ...prev, [type]: `0${inputValue}` }));
    }
  };

  return { dateValues, handleInputChange, handleInputBlur, inputRefs };
};
