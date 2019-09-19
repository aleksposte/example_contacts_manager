window.$ = require('jquery');
window._ = require('lodash');
// require('./components/AuthenticationBlock.jsx');
// require('./components/ContactsBlock.jsx');
// require('./components/RegisterBlock.jsx');
// require('./components/LoginBlock.jsx');
// require('./components/ErrorsBlock.jsx');
window.handlers = {};


window.ws = new WebSocket('ws://localhost:8888');
window.ws.server = (name, data) => window.ws.send(JSON.stringify({ name, data }));

window.handlers = {
  register: require('./client/register.js'),
  login: require('./client/login.js')
};

window.gs = {};
gs.active_block = 'REGISTER';

var components_context = require.context('./components/', true, /\.jsx$/); components_context.keys().forEach(components_context);
// var client_context = require.context('./client/', true, /\.jsx$/); client_context.keys().forEach(client_context);


window.ws.onopen = function () {
  $('#root').html(AuthenticationBlock());
  // $('#root').html(modal());
};

window.ws.onmessage = message => {
  message = JSON.parse(message.data);
  handlers[message.name];
  console.log(handlers);
  handlers[message.name](message.data);
};

window.ws.onclose = function () {
  console.log('close')
};
