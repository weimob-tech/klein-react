export function getWordLen(
  value: string,
  proportion = 2,
  chineseCalc?: boolean,
) {
  if (!value) return 0;
  if (!chineseCalc) return value.length;
  const temp = new Array(proportion).fill('*').join('');
  return value.replace(/[^\x00-\xff]/g, temp).length;
}
