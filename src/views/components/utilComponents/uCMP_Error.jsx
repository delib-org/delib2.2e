import React from "react";

class Error extends React.Component {

    constructor(){
        super();
    }

    renderToast() {
        return (
            <div id="card-alert" className="card deep-purple">
                <div className="card-content white-text">
                    <span className="card-title white-text darken-1">Some Message</span>
                    <p></p>
                </div>
                <div className="card-action deep-purple darken-2">
                    <a className="waves-effect waves-light  btn white-text">Ok</a>
                    <a className="waves-effect waves-light  btn white-text">Cancel</a>
                </div>
                <button type="button" className="close white-text" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
        );
    }

    render() {
        // var temp = ;
        if(this.props.error) {
            this.renderToast();
            // var $toastContent = $(temp);
            // Materialize.toast($toastContent, 6000);
        }
    }
}

export default Error;
