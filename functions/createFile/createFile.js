import fs from 'fs';

export const createFile = async (data, location) => {
  try {
    fs.writeFileSync(location, JSON.stringify(data, null, 4));
    console.log(`Data saved at ${location}`);
  } catch (err) {
    console.error(err);
  }
};
