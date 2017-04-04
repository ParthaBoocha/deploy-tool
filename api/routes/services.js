'use strict';

// import LoginService from '../services/login-service';
const LoginService = require('../services/login-service');

exports.register = (server, options, next) => {
  let routes = [
    {
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        reply('Hello');
      }
    },
    {
      method: 'POST',
      path: '/login',
      handler: (request, reply) => {
        reply(LoginService.login(request.payload.username));
      }
    }
  ];

  server.route(routes);

  next();
};

exports.register.attributes = { name: 'api' };
