export const formatDate = (date: string) => {
  const [year, month, day] = date.split('T')[0].split('-')

  return new Date(Number(year), Number(month) - 1, Number(day))
}
