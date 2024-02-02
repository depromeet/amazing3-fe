/**
 * object를 queryString로 바꿔주는 함수
 *
 * @example
 * createQueryString({ foo: 1, bar: ['a', 'b] }) // foo=1&bar=a&bar=b
 */
export const createQueryString = (params: Record<string, unknown>) => {
  return new URLSearchParams(
    Object.entries(params)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => (Array.isArray(value) ? value.map((x) => [key, x]) : [[key, value]]))
      .flat(),
  ).toString();
};
