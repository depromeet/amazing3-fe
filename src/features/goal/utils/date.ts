export const formatDate = (splitedDate: string[], separator: string) => {
  return splitedDate.join(separator);
};

export const isValidDate = (year: string, month: string, day: string) => {
  const date = year + '-' + month + '-' + day;
  return !isNaN(Date.parse(date));
};
