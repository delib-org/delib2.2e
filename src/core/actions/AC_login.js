import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGIN_TRY,
    LOGOUT,
    LOGOUT_ERROR,
    LOGOUT_SUCCESS,
} from '../../constants';


export function sendLoginError(err) {
    return {
        type: LOGIN_ERROR,
        payload: err
    };
}

export function sendLogoutError(err) {
    return {
        type: LOGOUT_ERROR ,
        payload: {
            loggedIn: false,
            error: err
        }
    };
}

export function loginSuccessRedirect(userCred, redirected) {
    console.log(userCred, redirected);
    if (redirected)
        return {
            type: LOGIN_SUCCESS,
            payload: {
                loggedIn: true,
                redirect: redirected,
                credentials: userCred,
            }
        };
}

export function logoutSuccessRedirect(redirected) {
    return {
        type: LOGOUT_SUCCESS,
        payload: {
            loggedIn: false,
            redirect: redirected,
            credentials: null,
        }
    };
}

export function logout() {
    return (dispatch, getState) => {
        var App = getState().firebase.App;

        App.auth().signOut().then(function() {
            logoutSuccessRedirect('Login');
        }, function(err) {
            sendLogoutError(err);
        });

        return {
            type: LOGOUT
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
                console.log('redirected');
                dispatch(loginSuccessRedirect(userCred, 'Home'));
                console.log('redirected');
                dispatch(loginSuccessRedirect(null, null));
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

        App.auth().onAuthStateChanged(
            (userCred) => {
                if (userCred) {
                    console.log('redirected');
                    dispatch(loginSuccessRedirect(userCred, 'Home'));
                    console.log('redirected');
                    dispatch(loginSuccessRedirect(null, null));
                } else {
                    dispatch(logoutSuccessRedirect('Login'));
                }
            });
    }
}
