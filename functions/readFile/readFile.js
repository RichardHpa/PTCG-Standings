import fs from 'fs';

export const readFile = async path => {
  if (fs.existsSync(path)) {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        throw new Error(`Error reading file ${path}`);
      } else {
        return JSON.parse(data);
      }
    });
  } else {
    return null;
  }
};
