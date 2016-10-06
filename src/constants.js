//Groups Actions
export const FETCH_GROUPS = "FETCH_GROUPS";
export const LOADING_GROUPS = "LOADING_GROUPS";
export const FETCH_GROUPS_SUCCESS = "FETCH_GROUPS_SUCCESS";

//Topics Actions
export const FETCH_TOPICS = "FETCH_TOPICS";
export const LOADING_TOPICS = "LOADING_TOPICS";
export const FETCH_TOPICS_SUCCESS = "FETCH_TOPICS_SUCCESS";

//Questions Actions
export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const LOADING_QUESTIONS = "LOADING_QUESTIONS";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";

//General entities actions
export const SET_ACTIVE_ENTITY = "SET_ACTIVE_ENTITY";

// view configuration (where to link for each entity and what avatar to put)
export const entityListViewConfig = {
  group: {
    avatar: "group",
    linkTo: "/group/"
  },
  topic: {
    avatar: "folder_open",
    linkTo: "/topic/"
  },
  question: {
    avatar: "live_help",
    linkTo: "#"
  }
};
