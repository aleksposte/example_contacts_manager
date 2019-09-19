var _ = require('lodash');
module.exports = (current_socket, data) => {
  if (data.name == '' || data.surname == '') {
    return current_socket.client( 'login', 'input_null' )
  } else {
    if (_.some(db.users, { 'name': data.name, 'surname': data.surname })) {
      return current_socket.client(  'login', { user: _.find(db.users, { 'name': data.name, 'surname': data.surname })} )
    } else {
      return current_socket.client( 'login', 'login_error' )
    }
  };
};