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
    addMonth(date,n){
        const [year,month,day] = getYearMonthDate(date);
        const copy = new Date(date);
        copy.setMonth(month + n);
        return copy
    },
    addYear(date,n){
        const [year] = getYearMonthDate(date);
        const copy = new Date(date);
        copy.setFullYear(year + n);
        return copy
    }
}

function getYearMonthDate(date){
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return [year, month, day]
}

