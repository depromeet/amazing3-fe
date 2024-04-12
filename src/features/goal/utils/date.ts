import { DATE_SEPARATOR } from '@/constants';
import type { DateProps } from '@/hooks/useDateInput';
import { typeToMaxLength } from '@/hooks/useDateInput';

export const isValidDate = (year: string, month: string, day: string) => {
  const yearNum = +year;
  const monthNum = +month - 1;
  const dayNum = +day;

  const date = new Date(yearNum, monthNum, dayNum);

  return date.getFullYear() === yearNum && date.getMonth() === monthNum && date.getDate() === dayNum;
};

/**
 *
 * @param string DATE_SEPARATOR를 기준으로 split했을 때, 모든 아이템이 number여야만, 길이를 만족해야만 true를 반환합니다.
 * @param format ex. 'YYYY.MM.DD'
 */
export const isValidDateFormat = (formattedDate = '', format = 'YYYY.MM.DD') => {
  const splittedFormat = format.split(DATE_SEPARATOR) as DateProps[];

  return (
    formattedDate
      .split(DATE_SEPARATOR)
      .every((date, index) => !isNaN(+date) && date.length === typeToMaxLength[splittedFormat[index]]) &&
    formattedDate.split(DATE_SEPARATOR).length === splittedFormat.length
  );
};
