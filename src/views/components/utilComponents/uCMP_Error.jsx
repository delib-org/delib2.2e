import React from "react";

class Error extends React.Component {

    constructor(){
        super();

        this.state= {
            errorMessageHebrew: ""
        };
    }

    componentDidUpdate() {
        if(typeof this.props.error === Object) {

            console.log(this.props.error);
            var errorCode = this.props.error.code;
            switch (errorCode) {
                case 'auth/wrong-password':
                    this.state.errorMessageHebrew = 'סיסמא שגוייה, נסה שנית';
                    break;
                case 'auth/user-not-found':
                    this.state.errorMessageHebrew = 'המשתמש איננו קיים במערכת';
                    break;
                case 'auth/argument-error':
                    this.state.errorMessageHebrew = 'נא הכנס פרטי משתמש תקינים';
                    break;
                default:
                    this.state.errorMessageHebrew = 'שגיאה לא ידועה';
            }

            Materialize.toast(this.state.errorMessageHebrew, 6000, 'rounded amber ');
        }
    }


    render() {
        return (null);
    }
}


export default Error;

