export const getDateDiffFromToday = (createdAt: string) => {
  const targetDate = new Date(createdAt);
  const todayDate = new Date();

  const dateDiff = todayDate.getTime() - targetDate.getTime();

  return Math.round(dateDiff / (1000 * 60 * 60 * 24));
};
