//Groups Actions
export const UPDATE_GROUP = "UPDATE_GROUP";
export const CLEAN_GROUPS = "CLEAN_GROUPS";

//Questions Actions
export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const CLEAN_QUESTIONS = "CLEAN_QUESTIONS";

//General entities actions
export const UPDATE_ACTIVE_ENTITY = "UPDATE_ACTIVE_ENTITY";
export const LOADING_ACTIVE_ENTITY =  "LOADING_ACTIVE_ENTITY";
export const LOADING_ACTIVE_ENTITY_FINISHED =  "LOADING_ACTIVE_ENTITY_FINISHED";
export const UPDATE_ENTITY = {
  groups: UPDATE_GROUP,
  questions: UPDATE_QUESTION
}

//firebase loading actions
export const FIREBASE_LOADING = "FIREBASE_LOADING";
export const FIREBASE_LOADING_FINISHED = "FIREBASE_LOADING_FINISHED";
// ==================================

//Login
//===== Login Reducer Actions

export const LOGIN_TRY = "LOGIN_TRY";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGOUT = "LOGOUT_TRY";
export const LOGOUT_ERROR = "LOGOUT_ERROR";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";


//===== Login form FIELDS
export const LOGIN_FORM_FIELDS = {
  email: {
    type: 'input',
    label: 'הכנס אימייל'
  },
  password: {
    type: 'input',
    label: 'הכנס סיסמא'
  },
};
// ==================================

// chat reducer
export const FETCH_CHATROOOM = "FETCH_CHATROOOM";
export const MESSAGE_SENT = "MESSAGE_SENT";
export const CHAT_ROOM_VOLUME = 20;
// ==================================

// entity List componenet
export const SCROLL_UP = "SCROLL_UP";
export const SCROLL_DOWN = "SCROLL_DOWN";
export const resetLazyLoadState = {
  lastLoadedEntityIdx: 0,
  scrollDownLoadPosition: 756,
  scrollUpLoadPosition: 0,
  numberToLoad: 9,
  elementsToLoadHeight: 756,
  currLoadedSubEntities: []
}
export const entityListViewConfig = {
  groups: {
    avatar: "group",
    linkTo: "/groups/"
  },
  topic: {
    avatar: "folder_open",
    linkTo: "/topic/"
  },
  questions: {
    avatar: "live_help",
    linkTo: "#"
  }
};
