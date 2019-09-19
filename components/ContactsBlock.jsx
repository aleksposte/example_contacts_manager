window[__filename.split('/')[1].split('.')[0]] = (data) => {
  // $('#authentication-header').remove();
  // $('#register_error').remove();
  // $('#register_form').remove();
  // $('#login_form').remove();

  console.log('here!!');
  console.log(data);

  // if (status == 'register_ok') {
  //   setTimeout(function(){
  //     $('#register_ok').remove();
  //   }, 1000);
  //
  //   return (
  //   <div id="register_ok"
  //        name="modal"
  //        onclick={ event => event.target === event.currentTarget ? event.target.remove() : void(0) }
  //        style={ "display: flex; top: 0px; right: 0px; bottom: 0px; left: 0px; position: fixed; background-color: rgba(0, 0, 0, .5);" }>
  //     <div style={ "margin: auto; background: rgb(231, 233, 237); border: 1px solid rgb(15, 33, 76); width: 400px;" }>
  //       <div style={ "padding: 10px" }>
  //         <div style={ "padding: 10px; background: white; border: 1px solid rgb(15, 33, 76); font-size: 15px; text-align: center;" }>
  //           Вы успешно зарегистировались !
  //         </div>
  //       </div>
  //     </div>
  //     <div name="modal">...</div>
  //   </div>
  // );
  // }

  // setTimeout(function(){
  //    $('#login_ok').remove();
  // }, 1000);
  //
  // if (status == 'login_ok') {
  //   return (
  //     <div id="login_ok"
  //          name="modal"
  //          onclick={ event => event.target === event.currentTarget ? event.target.remove() : void(0) }
  //          style={ "display: flex; top: 0px; right: 0px; bottom: 0px; left: 0px; position: fixed; background-color: rgba(0, 0, 0, .5);" }>
  //       <div style={ "margin: auto; background: rgb(231, 233, 237); border: 1px solid rgb(15, 33, 76); width: 400px;" }>
  //         <div style={ "padding: 10px" }>
  //           <div style={ "padding: 10px; background: white; border: 1px solid rgb(15, 33, 76); font-size: 15px; text-align: center;" }>
  //             Вы успешно авторизовались !
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return(
    <div id="contact_list">
      <div style={ "height: 50px; background: rgb(15, 33, 76); color: white; text-align: center; font-size: 20px; padding: 10px;" }>
        Привет { data.user.name }, { data.user.surname }
      </div>
      <div id="footer"
        style={"background: rgb(15, 33, 76); margin: 10px 30px; padding: 10px; text-align: center; color: white;  margin-bottom: 10px"}
           onClick={ () => {
             $('#contact_list').remove();
             $('#root').html(AuthenticationBlock());
           }}>
        Out
      </div>
    </div>
  );

    // return(
    //   <div id="contact_list">
    //     <div style={ "height: 50px; background: rgb(15, 33, 76); color: white" }>
    //       { user.name }, { user.surname }  Вы успешно авторизовались !
    //     </div>
    //     <div style={"background: rgb(15, 33, 76); margin: 10px 30px; padding: 10px; text-align: center; color: white;  "}
    //          onClick={ () => {
    //            $('#contact_list').remove();
    //            $('#root').html(AuthenticationBlock());
    //          }}>
    //       Out
    //     </div>
    //   </div>
    // );


};


