// This function is responsible for creating a file
import fs from 'fs';
import { format } from 'date-fns';

import { logFileOperation, logSuccess } from '../../utils/logger.js';

export const createFile = async (data, location) => {
  const date = format(new Date(), 'Pp');
  try {
    fs.writeFileSync(location, JSON.stringify(data));
    logFileOperation('write', location, true, { date });
    logSuccess('Data saved successfully', { location, date });
  } catch (err) {
    logFileOperation('write', location, false, { error: err.message });
    throw err;
  }
};
