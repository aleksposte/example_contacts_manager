var _ = require('lodash');
module.exports = (current_socket, data) => {
  if (data.name == '' || data.surname == '') {
    return current_socket.client( 'register', 'input_null' )
  } else {
    if (!_.some(db.users, { 'name': data.name })) {
      db.users.push( { id: db.users.length, 'name': data.name, 'surname': data.surname,  contacts: [] } );
      return current_socket.client( 'register', { user: _.find(db.users, {'name': data.name}) } )
    } else {
      return current_socket.client( 'register', 'register_error' )
    }
  }
};