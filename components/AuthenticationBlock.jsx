window[__filename.split('/')[1].split('.')[0]] = () => {
  return(
    <div name="authentication_block" id="authentication_block">

      <div style={ "height: 50px; background: rgb(15, 33, 76); color: white" }>
        <div id="register_button"
             style={ "float: left; width: 50%; height: 98%; text-align: center; line-height: 50px; font-size: 20px; cursor: pointer" }
             onmousemove={ event => $(event.currentTarget).css('background', 'rgb(236, 0, 140)') }
             onmouseleave={ event => $(event.currentTarget).css('background', 'rgb(15, 33, 76)') }
             onClick={() => {
               gs.active_block = 'REGISTER';
               $('#authentication_block').replaceWith(AuthenticationBlock());
             }}>
          Register
        </div>
        <div id="login_button"
             style={ "float: left; width: 50%; height: 98%; text-align: center; line-height: 50px; font-size: 20px; cursor: pointer" }
             onmousemove={ event => $(event.currentTarget).css('background', 'rgb(236, 0, 140)') }
             onmouseleave={ event => $(event.currentTarget).css('background', 'rgb(15, 33, 76)') }
             onClick={() => {
              gs.active_block = 'LOGIN';
              $('#authentication_block').replaceWith(AuthenticationBlock());
             }}>
          Login
        </div>
      </div>
      { gs.active_block == 'REGISTER' ? RegisterBlock() : LoginBlock() }

    </div>
  );
};
