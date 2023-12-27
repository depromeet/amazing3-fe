export const isIos = () => {
  const userAgent = navigator.userAgent;

  return Boolean(userAgent.match(/iPhone|iPad/i));
};
