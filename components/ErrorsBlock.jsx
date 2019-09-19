window[__filename.split('/')[1].split('.')[0]] = (event) => {
console.log(event.status);
  if (event.status == 'register_ok') {
    $('#root').html(ContactsBlock(event.user, event.status));
  }
  if (event.status == 'input_null') {
    // return (
    //   <div id="register_input_error"
    //        name="modal"
    //        onclick={ event => event.target === event.currentTarget ? event.target.remove() : void(0) }
    //        style={ "display: flex; top: 0px; right: 0px; bottom: 0px; left: 0px; position: fixed; background-color: rgba(0, 0, 0, .5);" }>
    //     <div style={ "margin: auto; background: rgb(231, 233, 237); border: 1px solid rgb(15, 33, 76); width: 400px;" }>
    //       <div style={ "padding: 10px" }>
    //         <div style={ "padding: 10px; background: white; border: 1px solid rgb(15, 33, 76); font-size: 15px; text-align: center;" }>
    //           Заполните все поля!
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  };
  if (event.status == 'register_error') {
    console.log("HERE");
    // return (
    //   <div id="register_error"
    //        name="modal"
    //        onClick = { event => event.target === event.currentTarget ? event.target.remove() : void(0) }
    //        style = {"display: flex; top: 0px; right: 0px; bottom: 0px; left: 0px; position: fixed; background-color: rgba(0, 0, 0, .5);"} >
    //     <div style={"margin: auto; background: rgb(231, 233, 237); border: 1px solid rgb(15, 33, 76); width: 400px;"}>
    //       <div style = { "padding: 10px"}>
    //         <div style = {"padding: 10px; background: white; border: 1px solid rgb(15, 33, 76); font-size: 15px; text-align: center;"} >
    //           Такой пользователь уже зарегистрирован!
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  };
  if (event.status == 'login_ok') {
    $('#root').html(ContactsBlock(event.user, event.status));
  }
  if (event.status == 'login_error') {
    // return (
    //   <div id="login_error"
    //        name="modal"
    //        onClick = { event => event.target === event.currentTarget ? event.target.remove() : void(0) }
    //        style = {"display: flex; top: 0px; right: 0px; bottom: 0px; left: 0px; position: fixed; background-color: rgba(0, 0, 0, .5);"} >
    //     <div style={"margin: auto; background: rgb(231, 233, 237); border: 1px solid rgb(15, 33, 76); width: 400px;"}>
    //       <div style = { "padding: 10px"}>
    //         <div style = {"padding: 10px; background: white; border: 1px solid rgb(15, 33, 76); font-size: 15px; text-align: center;"} >
    //           Такой пользователь не зарегистрирован!
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  };
}

document.addEventListener('keydown', event => {
  if ($('[name=modal]').last().attr('id') !== 'register_input_error' &&
      $('[name=modal]').last().attr('id') !== 'register_error' &&
      $('[name=modal]').last().attr('id') !== 'login_error' &&
      $('[name=modal]').last().attr('id') !== 'login_input_error'
      ) return;
  event.stopImmediatePropagation();
  if (event.which == 27) $('[name=modal]').last().remove();
});