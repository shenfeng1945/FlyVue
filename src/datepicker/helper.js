export default {
    firstDayOfMonth(date){
      const [year, month] = getYearMonthDate(date);
      return new Date(year, month, 1)
    },
    lastDayOfMonth(date){
      const [year, month] = getYearMonthDate(date);
      return new Date(year, month + 1, 0)
    },
    lastDayOfPrevMonth(date){
      const [year, month] = getYearMonthDate(date);
      return new Date(year, month , 0)
    },
    getYearMonthDate,
}

function getYearMonthDate(date){
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return [year, month, day]
}

