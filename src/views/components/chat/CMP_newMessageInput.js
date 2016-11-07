import React from 'react';


export default (props) => {
  return (
    <div className="row footer red">
      <form className="col s12">
        <div className="row valign-wrapper">
          <div className="input-field message-input col s10 pull-s2 m11 pull-m1 l11 pull-l1 valign">
            <input id="icon_prefix" type="text" className="validate"/>
            <label htmlFor="icon_prefix" className="center-align">כתוב משהו...</label>
          </div>
          <div className="btn-send col s2 push-s10 m1 push-m11 l1 push-l11 red lighten-2 waves-effect waves-light">
            <li className="material-icons white-text center-align">mode_edit</li>
          </div>
        </div>
      </form>
    </div>
  )
}

            // <i className="material-icons prefix">mode_edit</i>
