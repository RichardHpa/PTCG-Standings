import fs from 'fs';
import { logInfo, logFileOperation, logSuccess } from '../../utils/logger.js';

// This function is responsible for creating a folder
export const createFolder = async folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
    logFileOperation('create', folder, true);
    logSuccess('Folder created successfully', { folder });
  } else {
    logInfo('📁 Folder already exists', { folder });
  }
};
