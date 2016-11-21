import {
  LOGIN_TRY,
  REDIRECT,
  REDIRECTED,
} from '../../constants';
// import './AC_alertMessage';


export function redirectTo(route, userCred) {
    return (dispatch) => {
        if(userCred)
            dispatch({
                type: REDIRECT,
                payload: {
                    loggedIn: true,
                    redirect: route,
                    userCred,
                }
            });
        else
            dispatch({
                type: REDIRECT,
                payload: {
                    loggedIn: false,
                    redirect: route,
                    userCred,
                }
            });

        dispatch({
            type: REDIRECTED,
            payload: {
                redirect: null
            }
        });
    }
}

export function logout() {
    return (dispatch, getState) => {
        var App = getState().firebase.App;

        App.auth().signOut().then(function() {
            redirectTo('login', null);
        }, function(err) {
            // showAlert(err);
        });
    }
}


export function login(loginType) {
    return (dispatch, getState) => {
        const App = getState().firebase.App;
        const loginForm = getState().form.login;
        const email = loginForm.email.value;
        const password = loginForm.password.value;
        const firebaseLib = getState().firebase.library;

        switch(loginType){
            case "email&password":
                App.auth().signInWithEmailAndPassword(email, password).then(
              (userCred) => {
                  dispatch(redirectTo('/home', userCred));
              }).catch((err) => {
                // dispatch(showAlert(err))
            });
                break;

            case "google":

                console.dir(App.auth);
                const googleProvider = new firebaseLib.auth.GoogleAuthProvider();
                App.auth().signInWithPopup(googleProvider).then(function(userCred) {
                    // // This gives you a Google Access Token. You can use it to access the Google API.
                    // var token = result.credential.accessToken;
                    // // The signed-in user info.
                    // var user = result.user;
                    // // ...
                    dispatch(redirectTo('/home', userCred));

                }).catch(function(error) {
                    // Handle Errors here.
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    // // The email of the user's account used.
                    // var email = error.email;
                    // // The firebase.auth.AuthCredential type that was used.
                    // var credential = error.credential;
                    // // ...


                    // dispatch(showAlert(err))
                });
        }

        dispatch({
            type: LOGIN_TRY,
            payload: ++getState().login.tryCount
        });
    }
}


export function verifyAuth() {
    return (dispatch, getState) => {
        const App = getState().firebase.App;

        App.auth().onAuthStateChanged(
            (userCred) => {
                if (userCred) {
                    dispatch(redirectTo('home',userCred));
                } else {
                    dispatch(redirectTo('login', null));
                }
            });
    }
}
