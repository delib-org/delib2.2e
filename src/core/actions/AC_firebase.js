
import { getDataBaseRoot, init, getLib } from '../../firebase/firebase';
import {
    FIREBASE_INIT_ALL,
    FIREBASE_LOADING,
    FIREBASE_LOADING_FINISHED
  } from '../../constants';

// Start the app and get dataBase root
var initAndGetRoot = ()=> {
    var firebaseApp = init();

    return {
        App: firebaseApp,
        rootDB: getDataBaseRoot(firebaseApp),
        library: getLib()
    };
};

export function firebaseInit() {
    
    return {
      type: FIREBASE_INIT_ALL,
      payload: initAndGetRoot()
    };
}

export function firebaseLoading(loadingType) {
    return {
        type: FIREBASE_LOADING,
        payload: loadingType
    }
}

export function firebaseLoadingFinished() {
    return {
        type: FIREBASE_LOADING_FINISHED
    }
}
