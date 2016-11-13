import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGIN_TRY,
    LOGOUT,
    LOGOUT_ERROR,
    LOGOUT_SUCCESS
} from '../../constants';


export function sendLoginError(err) {
    console.log(err);
    return {
        type: LOGIN_ERROR
        , payload: err
    };
}

export function loginSuccessRedirect(userCred) {
    console.log(userCred);
    return {
        type: LOGIN_SUCCESS
        , payload: {
            loggedIn: true
            , redirect: true
            , credentials: userCred,

        }
    };
}

export function sendLogoutError(err) {
    return {
        type: LOGOUT_ERROR,
        payload: {
            loggedIn: false
            , error: err
        }
    };
}


export function logoutSuccessRedirect(goodbye) {
    return {
        type: LOGOUT_SUCCESS
        , payload: goodbye
    };
}

export function logout() {
    return (dispatch, getState) => {
        var App = getState().firebase.App;

        App.auth().signOut().then(function() {
            logoutSuccessRedirect(true);
        }, function(err) {
            sendLogoutError(err);
        });

        return {
            type: LOGOUT,
            payload: err
        };
    }
}

export function login() {

    return (dispatch, getState) => {
        var App = getState().firebase.App;
        var loginForm = getState().form.login;
        var email = loginForm.email.value;
        var password = loginForm.password.value;

        App.auth().signInWithEmailAndPassword(email, password).then(
            (userCred) => {
                dispatch(loginSuccessRedirect(userCred))
            }).catch((err) => {
                dispatch(sendLoginError(err))
            });

        dispatch({
            type: LOGIN_TRY,
            payload: ++getState().login.tryCount
        });
    }
}

export function verifyAuth() {
    return (dispatch, getState) => {
        var App = getState().firebase.App;

        App.auth().onAuthStateChanged(userCred => {
            if (userCred) {
                dispatch(loginSuccessRedirect(userCred));
            } else {
                dispatch(logout());
            }
        });
    }
}
