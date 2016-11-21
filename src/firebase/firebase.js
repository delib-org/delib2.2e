import firebase from 'firebase';
import firebaseConfig from './config';

// export const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const DB = firebaseApp.database().ref();

export var init = ()=> {
    return firebase.initializeApp(firebaseConfig);
};

// Get database root
export var getDataBaseRoot = (firebaseApp)=> {
    return firebaseApp.database().ref();
};

export var getLib = ()=> {
    return firebase;
}