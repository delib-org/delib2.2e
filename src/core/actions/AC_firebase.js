
import { getDataBaseRoot, init } from '../../firebase/firebase';
import {
    FIREBASE_INIT_ALL
  } from '../../constants';

// Start the app and get dataBase root
var initAndGetRoot = ()=> {
    var firebaseApp = init();

    console.log(firebaseApp);
    return {
        App: firebaseApp,
        rootDB: getDataBaseRoot(firebaseApp)
    };
};

export function firebaseInit() {
    
    return {
      type: FIREBASE_INIT_ALL,
      payload: initAndGetRoot()
    };
}