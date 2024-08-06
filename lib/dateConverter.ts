export function dateConverter(date: string): string {
  const newDate = new Date(date);
  const day = newDate.getDate().toString().length === 1 ? `0${newDate.getDate()}` : newDate.getDate().toString();
  const month =
    (newDate.getMonth() + 1).toString().length === 1
      ? `0${newDate.getMonth() + 1}`
      : (newDate.getMonth() + 1).toString();
  return `${day}.${month}.${newDate.getFullYear()}`;
}
export function dateConverterWithTime(date: string): string {
  return `${dateConverter(date)} | ${new Date(date).getHours()}:${new Date(date).getMinutes()}`;
}
