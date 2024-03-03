export const addSuffixIfExceedsLimit = (number: number, limit: number, suffix = '+') => {
  if (number > limit) return limit + suffix;
  return number;
};

export const addSuffixIfExceedsLength = (text: string, length: number, suffix = '...') => {
  if (text.length > length) return text.slice(0, length) + suffix;
  return text;
};
