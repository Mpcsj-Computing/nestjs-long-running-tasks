export const sleep = async (timeInMs: number = 500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({}), timeInMs);
  });
};
