export const timestampToDate = (timestamp: number) => {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth()は0から始まるため、1を追加
  const day = date.getDate();

  return { year, month, day };
};
