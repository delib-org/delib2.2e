//Groups Actions
export const FETCH_GROUPS = "FETCH_GROUPS";
export const LOADING_GROUPS = "LOADING_GROUPS";
export const FETCH_GROUPS_SUCCESS = "FETCH_GROUPS_SUCCESS";
export const UPDATE_GROUP = "UPDATE_GROUP";

//Topics Actions
export const FETCH_TOPICS = "FETCH_TOPICS";
export const LOADING_TOPICS = "LOADING_TOPICS";
export const FETCH_TOPICS_SUCCESS = "FETCH_TOPICS_SUCCESS";

//Questions Actions
export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const LOADING_QUESTIONS = "LOADING_QUESTIONS";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
export const UPDATE_QUESTION = "UPDATE_QUESTION";

//General entities actions
export const SET_ACTIVE_ENTITY = "SET_ACTIVE_ENTITY";
export const UPDATE_ACTIVE_ENTITY = "UPDATE_ACTIVE_ENTITY";
export const LOADING_ACTIVE_ENTITY =  "LOADING_ACTIVE_ENTITY";
export const LOADING_ACTIVE_ENTITY_FINISHED =  "LOADING_ACTIVE_ENTITY_FINISHED";

// view configuration (where to link for each entity and what avatar to put)
export const entityListViewConfig = {
  groups: {
    avatar: "group",
    linkTo: "/group/"
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

export const UPDATE_ENTITY = {
  groups: UPDATE_GROUP,
  questions: UPDATE_QUESTION
}
