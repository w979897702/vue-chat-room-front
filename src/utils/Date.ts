export function parseDate(date: number): string {
  let dateObj = new Date(date);
  let Y = dateObj.getFullYear() + '年';
  let M = dateObj.getMonth() + 1 + '月';
  let D = dateObj.getDate() + '日';
  let h = dateObj.getHours() + ':';
  let m = dateObj.getMinutes() + ':';
  let s = dateObj.getSeconds();
  return Y + M + D + h + m + s;
}
