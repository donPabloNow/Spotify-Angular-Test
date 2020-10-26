const { writeFile } = require('fs');
const { argv } = require('yargs');

// read environment variables from .env file
require('dotenv').config();

// read the command line argument passed
// with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';

const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
  production: ${isProduction},
  spotify_client_id: "${process.env.spotify_client_id}",
  spotify_client_secret: "${process.env.spotify_client_secret}" 
};
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Wrote variables to ${targetPath}`);
});