// handlers[__filename.split('/')[1].split('.')[0]] = data => {
module.exports = data => {
  if (data == 'input_null') {
    $('#authentication_block').after(InputError());
  } else if (data == 'login_error') {
    $('#authentication_block').after(LoginError());
  } else {
    $('#authentication_block').replaceWith(ContactsBlock(data));
  }
}
