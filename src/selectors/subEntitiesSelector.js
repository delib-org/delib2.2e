import { createSelector } from 'reselect'
import _ from 'lodash';

//get acess to the relevant state parts
const activeEntitySelector = state => state.activeEntity.uid;
const groupsSelector = state => state.groups;
const topicsSelector = state => state.topics;
const questionsSelector = state => state.questions;

/* *** This Selector is getting the active entity uid, the global state groups, topics and questions
      (see reducers/initialState file) and returns a list of all of the sub entities of this active entity ***
*/

const filterEntityListByParent = (entityList, activeEntityUid) => {
  return _.filter(entityList, (entity) => (entity.parentEntityUid === activeEntityUid));
}


const getSubEntities = (activeEntityUid, groups, topics, questions) => {
  /*if one of the entites is still loading (shouldn't happen because we handle with it in the parent component)
    then just return an empty object with loading status true*/
  if (groups.loading || topics.loading || questions.loading)
    return {
      allEntities: [],
      loading: true
    };

  const filteredGroups = filterEntityListByParent(groups.allGroups,  activeEntityUid);
  const filteredTopics = filterEntityListByParent(topics.allTopics,  activeEntityUid);
  const filteredQuestions = filterEntityListByParent(questions.allQuestions, activeEntityUid);

  //return a new object with all of the filterd lists
  return {
    allEntities: [...filteredGroups, ...filteredTopics, ...filteredQuestions],
    loading: false
  };
}

export default createSelector (
  activeEntitySelector,
  groupsSelector,
  topicsSelector,
  questionsSelector,
  getSubEntities
)
