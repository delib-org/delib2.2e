import React from 'react';


export default (props) => {
  return (
    <div className="row red">
      <form className="col s12">
          <div className="input-field message-input col s12">
            <input id="icon_prefix" type="text" className="validate"/>
            <label for="icon_prefix" className="center-align">כתוב משהו...</label>
          </div>
      </form>
    </div>
  )
}

            // <i className="material-icons prefix">mode_edit</i>
