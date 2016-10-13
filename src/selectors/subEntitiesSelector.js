import { createSelector } from 'reselect'
import _ from 'lodash';

//get acess to the relevant state parts
const groupsSelector = state => state.groups;
const questionsSelector = state => state.questions;


const getAllSubEntities = (groups, questions) => {
  const groupsArry = _.values(groups);
  const questionsArry = _.values(questions);
  
  return [...groupsArry, ...questionsArry];
}

export default createSelector (
  groupsSelector,
  questionsSelector,
  getAllSubEntities
)
