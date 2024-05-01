export const isOnlyWhitespace = (value: string) => {
  return value.trim().length === 0 && value.length > 0;
};
