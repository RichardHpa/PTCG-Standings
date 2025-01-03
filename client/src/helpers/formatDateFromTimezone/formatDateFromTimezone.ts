import { fromZonedTime, format } from 'date-fns-tz';
import { format as formatBase } from 'date-fns';

// This is the timezone where Julian's API is located
// const apiTimezone = 'Europe/Amsterdam';

export const formatDateFromTimezone = (
  date: string | number | Date,
  formatType: string,
  timezone?: string,
) => {
  const formattedDate = new Date(date);
  if (!timezone) {
    return formatBase(formattedDate, formatType);
  }
  return format(fromZonedTime(formattedDate, timezone), formatType);
};
