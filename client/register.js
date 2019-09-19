// handlers[__filename.split('/')[1].split('.')[0]] = data => {
module.exports = data => {
  console.log('here');
  if (data == 'input_null') {
    $('#authentication_block').after(InputError());
  } else if (data == 'register_error') {
    $('#authentication_block').after(RegisterError());
  } else {
    $('#authentication_block').replaceWith(ContactsBlock(data));
  }
}
