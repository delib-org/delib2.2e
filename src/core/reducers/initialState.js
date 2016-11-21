//This is the global state initial value.
export default {
  activeEntity: {
    isLoading: true,
    entity: {}
  },
  groups: {},
  questions: {},
  firebase: {
    type: "ACTIVE_ENTITY",
    isLoading: true,
    App: null,
    rootDB: null
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
}
