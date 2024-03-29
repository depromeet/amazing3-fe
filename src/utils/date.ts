export const formatDate = (splitedDate: string[], separator: string) => {
  return splitedDate.join(separator);
};

export const isValidDate = (year: string, month: string, day: string) => {
  const yearNum = +year;
  const monthNum = +month - 1;
  const dayNum = +day;

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
