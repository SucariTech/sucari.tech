const { resolve } = require('path');
const { readdirSync } = require('fs');

module.exports = ({ actions }) => {
  /* Alias Setup */
  const alias = {};
  readdirSync(resolve(__dirname, '../src'))
    .forEach(fileName => {
      const key = fileName.substring(0, fileName.indexOf('.')) || fileName;
      alias[`@${key}`] = resolve(__dirname, `../src/${key}`);
    });

  actions.setWebpackConfig({
    resolve: { alias }
  });
}