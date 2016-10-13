//This is the global state initial value.
export default {
  activeEntity: {
    isLoading: true,
    entity: {}
  }, // for example {uid: "-ABCDEFG", title: "ab", description: "abc"...}

  groups: {},

  topics: {
    allTopics: {}, // in a format of {uid1: {topic1}, uid2: {topic2}... }
    loading: true,
    error: false
  },

  questions: {}
}
