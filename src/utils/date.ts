import { DATE_SEPARATOR, HOURS_PER_DAY, MINUTES_PER_HOUR, SECONDS_PER_MINUTE } from '@/constants';

export const formatDate = (splitedDate: string[], separator = DATE_SEPARATOR) => {
  return splitedDate.filter((date) => date !== '' && date !== undefined).join(separator);
};

export const isValidDate = (year: string, month: string, day?: string) => {
  return hasValidDateLengths(year, month, day) && doesDateExist(year, month, day);
};

export const hasValidDateLengths = (year: string, month: string, day?: string) => {
  if (year.length !== 4 || month.length !== 2) {
    return false;
  }

  if (day && day.length !== 2) {
    return false;
  }

  return true;
};

export const doesDateExist = (year: string, month: string, day?: string) => {
  const yearNum = +year;
  const monthNum = +month - 1;
  const dayNum = day ? +day : 1;

  const date = new Date(yearNum, monthNum, dayNum);

  return date.getFullYear() === yearNum && date.getMonth() === monthNum && date.getDate() === dayNum;
};

export const isLargerThanToday = (year: string, month: string) => {
  let yearNum = +year;
  let monthNum = +month;

  if (monthNum === 12) {
    yearNum++;
    monthNum = 0;
  }

  const date = new Date(yearNum, monthNum, 1);

  return date > new Date();
};

/**
 * 서버에서 받은 시간을 YYYY.MM.DD 형식으로 바꿔주는 함수
 *
 * @param time 2024-01-30T20:09:01.820762
 * @returns YYYY.MM.DD
 */
export const formatDotYYYYMMDD = (time: string) => {
  const [YYYYMMDD] = time.split('T');
  return YYYYMMDD.replaceAll('-', '.');
};

export const formatDotYYYYMM = (time: string) => {
  const [YYYYMM] = time.split('T');
  return YYYYMM.split('-').slice(0, -1).join('.');
};

/**
 * 시간 정책에 맞게 변환해주는 함수
 */
export const convertTimeToElapsedTime = (time: string) => {
  const start = new Date(time);
  const end = new Date();

  const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
  if (seconds < SECONDS_PER_MINUTE) return '방금 전';

  const minutes = seconds / SECONDS_PER_MINUTE;
  if (minutes < MINUTES_PER_HOUR) return `${Math.floor(minutes)}분 전`;

  const hours = minutes / MINUTES_PER_HOUR;
  if (hours < HOURS_PER_DAY) return `${Math.floor(hours)}시간 전`;

  return `${start.toLocaleDateString()}`;
};

export const getYYYYMMDD = (time: string, seperator = '-') => {
  const [YYYY, MM, DD] = time.split(seperator);
  return {
    YYYY,
    MM,
    DD,
  };
};

export const getYYYY = (time: string, seperator = '-') => getYYYYMMDD(time, seperator).YYYY;
