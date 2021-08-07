const { version, name, repository, license } = require('@root/package.json');
const config = require('@config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: `${name} API documentation`,
    version,
    license: {
      name: `${license}`,
      url: `${repository}/blob/master/LICENSE`,
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};

module.exports = swaggerDef;
