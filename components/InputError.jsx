// handlers[__filename.split('/')[1].split('.')[0]] = data => {
window[__filename.split('/')[1].split('.')[0]] = () => {
  return (
    <div id="register_input_error"
         name="modal"
         onclick={ event => event.target === event.currentTarget ? event.target.remove() : void(0) }
         style={ "display: flex; top: 0px; right: 0px; bottom: 0px; left: 0px; position: fixed; background-color: rgba(0, 0, 0, .5);" }>
      <div style={ "margin: auto; background: rgb(231, 233, 237); border: 1px solid rgb(15, 33, 76); width: 400px;" }>
        <div style={ "padding: 10px" }>
          <div style={ "padding: 10px; background: white; border: 1px solid rgb(15, 33, 76); font-size: 15px; text-align: center;" }>
            Заполните все поля!
          </div>
        </div>
      </div>
    </div>
  );
}
