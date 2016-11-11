//This is the global state initial value.
export default {
  activeEntity: {
    isLoading: true,
    entity: {}
  },
  groups: {},
  questions: {},
  chatRoom: {},
  firebaseLoading: {
    type: "ACTIVE_ENTITY",
    isLoading: true
  }
}
