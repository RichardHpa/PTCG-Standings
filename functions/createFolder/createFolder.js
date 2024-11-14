import fs from 'fs';

export const createFolder = async folder => {
  if (!fs.existsSync(folder)) {
    console.log(`Creating ${folder}`);
    fs.mkdirSync(folder, { recursive: true });
  }
};
