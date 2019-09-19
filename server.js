var _ = require('lodash');
var ws = require('ws');
var http = require('http');
var fs = require('fs');

global.db = {
  'users': [
    {
      'name': 'rf',
      'surname': 'rf',
      'contacts': [
        {
          'id': 1,
          'name': 'name2',
          'surname': 'surname2',
          'phone': '09090',
          'email': 'qw@qw.we',
          'comment': 'tutu'
        },
        {
          'id': 2,
          'name': 'name3',
          'surname': 'surname3',
          'phone': '09090',
          'email': 'qw@qw.we',
          'comment': 'tutu'
        },
        {
          id: 3,
          name: 'name4',
          'surname': 'surname4',
          'phone': '09090',
          'email': 'qw@qw.we',
          'comment': 'tutu'
        }
      ]
    }
  ],
};

global.handlers = {
  register: require('./server/register.js'),
  login: require('./server/login.js')
};

var server = http.createServer((request, response) => {
  if (request.url == '/dist/bundle.js') {
    return fs.createReadStream('./dist/bundle.js').pipe(response);
  }
  fs.createReadStream('./dist/index.html').pipe(response);
});

new ws.Server({server}).on('connection', current_socket => {
  current_socket.on('message', event => {
    current_socket.client = (name, data) => current_socket.send(JSON.stringify({ name, data }));
    event = JSON.parse(event);
    console.log(event);
    global.handlers[event.name](current_socket, event.data);
  });

  current_socket.on('close', () => console.log('close'));
});

server.listen(8888, () => console.log('listening 8888'));
