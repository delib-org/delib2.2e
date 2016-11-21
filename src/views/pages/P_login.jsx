import React, {Component, PropTypes} from "react";
import { reduxForm } from 'redux-form';
import _ from 'lodash';

import "../style/login.css";
import { LOGIN_FORM_FIELDS } from "../../constants.js";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        handleSubmit:  PropTypes.func
    };

    renderField(fieldConf, field) {
        const fieldHelper = this.props.fields[field];

        return(
            <div className='row'>
                <div className='input-field col s12 '>
                    <fieldConf.type className='validate'
                                    type={field}
                                    dir="auto"
                                    name={field}
                                    id={field}
                                    {...fieldHelper}
                    />
                    <label htmlFor={field}>{fieldConf.label}</label>
                </div>
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <div className="section"></div>
                <main>
                    <center>
                        <div className="section"></div>

                        <h5 className="indigo-text">ברוך הבא, נא הזן פרטי משתמש</h5>
                        <div className="section"></div>

                        <div className="container">
                            <div className="z-depth-1 grey lighten-4 row" id="main-card">

                                <form className="col s12" method="post">
                                    <div className='row'>
                                        <div className='col s12'>
                                        </div>
                                    </div>

                                    {_.map(LOGIN_FORM_FIELDS, this.renderField.bind(this))}

                                    <label>
                                        <a className='grey-text' href='#!'><b>שכחת סיסמא?</b></a>
                                    </label>

                                    <br />
                                    <center>
                                        <div className='row'>
                                            <button
                                                name='btn_login' className='col s12 btn btn-large waves-effect indigo'
                                                onClick={handleSubmit(()=> {this.props.login('email&password')})}
                                            >Login</button>
                                        </div>
                                        <div className='row'>
                                            <button
                                              name='btn_login' className='col s12 btn btn-large waves-effect indigo'
                                              onClick={handleSubmit(()=> {this.props.login('google')})}
                                            >Google Login</button>
                                        </div>
                                    </center>
                                </form>
                            </div>
                        </div>
                    </center>



                    <div className="section"></div>
                    <div className="section"></div>
                </main>
            </div>
        );
    }
}


function validate(values) {
    const errors = {};

    _.each(LOGIN_FORM_FIELDS, ( type, field ) => {
        if( ![values[field]])
            errors[field] = 'Enter a ${field}';
    });

    return errors;
}


export default reduxForm({
    form: 'login',
    fields: _.keys(LOGIN_FORM_FIELDS),
})(LoginForm);

