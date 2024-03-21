export const formatOverLength = (string: string, length = 3) =>
  string.length > length ? `${string.slice(0, length)}..` : string;
