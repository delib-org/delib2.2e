//This is the global state initial value.
export default {
  activeEntity: {
    isLoading: true,
    entity: {}
  },
  groups: {},
  questions: {},
  firebaseLoading: {
    type: "ACTIVE_ENTITY",
    isLoading: true
  },
  login: {
    tryCount: 0,
    loggedIn: false,
    redirect: false,
    userCred: null,
    error: null
  },
  user: {
    userName: "",
    email: "",
    lastEnternceDate: ""
  },
  firebase: {
    App: null,
    rootDB: null
  }
}
