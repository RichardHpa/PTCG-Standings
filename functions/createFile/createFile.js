// This function is responsible for creating a file
import fs from 'fs';
import { logFileOperation, logSuccess } from '../../utils/logger.js';

export const createFile = async (data, location) => {
  try {
    fs.writeFileSync(location, JSON.stringify(data, null, 4));
    logFileOperation('write', location, true);
    logSuccess('Data saved successfully', { location });
  } catch (err) {
    logFileOperation('write', location, false, { error: err.message });
    throw err;
  }
};
