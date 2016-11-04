import { createSelector } from 'reselect'
import _ from 'lodash';

const groupsSelector = state => state.groups;
const topicsSelector = state => state.topics;
const questionsSelector = state => state.questions;

//this selector checks if one of the parts of the state is loading, and returning a loading status

const getLoadingEntities = (groups, topics, questions) => {
    return (groups.loading || topics.loading || questions.loading);
}

export default createSelector (
  groupsSelector,
  topicsSelector,
  questionsSelector,
  getLoadingEntities
)
