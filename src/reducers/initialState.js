//This is the global state initial value.
export default {
  activeEntity: {
    uid: "",
  }, // for example {uid: "-ABCDEFG", title: "ab", description: "abc"...}

  groups: {
    allGroups: {}, // in a format of {uid1: {group1}, uid2: {group2}... }
    loading: true,
    error: false
  },

  topics: {
    allTopics: {}, // in a format of {uid1: {topic1}, uid2: {topic2}... }
    loading: true,
    error: false
  },

  questions: {
    allQuestions: {}, // in a format of {uid1: {question1}, uid2: {question2}... }
    loading: true,
    error: false
  }
}
