window[__filename.split('/')[1].split('.')[0]] = () => {
  gs.active_block = 'LOGIN';
  return (
    <div id="login_form">
      <div id="login" style={ "width: 300px; height: 170px; background: rgb(231, 233, 237); border: 1px solid rgb(15, 33, 76); margin: 50px auto; padding: 20px;" }>
        <div style={ "margin-bottom: 10px; display: block;" }>
          <div style={ "padding: 5px;  border-right: none; text-align: center; font-size: 20px;"  }>
            Login
          </div>
        </div>
        <div style={ "margin-bottom: 10px; display: flex" }>
          <div id="name-label"
               style={ "padding: 5px; border: 1px solid rgb(15, 33, 76); border-right: none; text-align: center;" }>
            name
          </div>
          <input id="name-input"
                 style={ "outline: none; border: 1px solid rgb(15, 33, 76); padding: 5px; flex-grow: 1;" }
                 type="text"/>
        </div>
        <div style={ "margin-bottom: 10px; display: flex" }>
          <div style={ "padding: 5px; border: 1px solid rgb(15, 33, 76); border-right: none; text-align: center;" }>
            surname
          </div>
          <input id="surname-input"
                 style={ "outline: none; border: 1px solid rgb(15, 33, 76); padding: 5px; flex-grow: 1; " }
                 type="text"/>
        </div>
        <div id="submit"
             style={ "background: rgb(15, 33, 76); margin: 10px 30px; padding: 10px; text-align: center; color: white;  " }
             onmousemove={ event => $(event.currentTarget).css('background', 'rgb(236, 0, 140)') }
             onmouseleave={ event => $(event.currentTarget).css('background', 'rgb(15, 33, 76)') }
             onClick={ () => { ws.server('login', { name: $('#name-input').val(), surname: $('#surname-input').val() }) }}>
          login
        </div>
      </div>
    </div>
  );
};
