import { fromZonedTime, format } from 'date-fns-tz';

// This is the timezone where Julian's API is located
const apiTimezone = 'Europe/Amsterdam';

export const formatDateFromTimezone = (
  date: string | number | Date,
  formatType: string,
  timezone: string = apiTimezone,
) => {
  const formattedDate = new Date(date);
  return format(fromZonedTime(formattedDate, timezone), formatType);
};
