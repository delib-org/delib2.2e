import firebase from 'firebase';
import firebaseConfig from './config';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const DB = firebaseApp.database().ref();

export var init = ()=> {
    var config = {
        apiKey: "AIzaSyC_DvxaMaKqQvSlgAeIW1Wr6xjYJc1IpYI",
        // authDomain: "projectId.firebaseapp.com",
        databaseURL: "https://uzicranereports.firebaseio.com/"
        // storageBucket: "bucket.appspot.com"
    };
    return firebase.initializeApp(config);
};

// Get database root
export var getDataBaseRoot = (firebaseApp)=> {
    return firebaseApp.database().ref();
};