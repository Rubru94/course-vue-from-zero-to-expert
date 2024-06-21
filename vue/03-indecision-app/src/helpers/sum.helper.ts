export const sum = (a: number, b: number) => a + b;

export const sumArray = (arr: number[]) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};
