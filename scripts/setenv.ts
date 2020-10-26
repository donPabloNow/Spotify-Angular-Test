const { writeFile } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();

const environment = argv.environment;
const isProduction = environment === 'prod';

const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;

const environmentFileContent = `
export const environment = {
  production: ${isProduction},
  spotify_client_id: "${process.env.spotify_client_id}",
  spotify_client_secret: "${process.env.spotify_client_secret}" ,
  spotify_page_size: ${process.env.spotify_page_size}
};
`;

writeFile(targetPath, environmentFileContent, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Wrote variables to ${targetPath}`);
});