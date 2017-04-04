'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  port: 8080, host: 'localhost'
});

server.register(require('./api/routes/services.js'), err => {
  if (err) {
    console.error(`Failed to load plugin: ${err}`);
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
