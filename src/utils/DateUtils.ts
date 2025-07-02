class DateUtils {
  static _months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
  static getFormattedDate(date: Date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = this._months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName} ${day} ${month} ${year}`
  }

  static formatDateString(dateString: string) {
    if (dateString != undefined) {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = this._months[date.getMonth()];
      const year = date.getFullYear();

      return `${month} ${day}, ${year}`
    }
  }
}

export default DateUtils;