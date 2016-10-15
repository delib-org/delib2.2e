import EntityList from '../components/entityList';
import SubEntitiesSelector from '../selectors/subEntitiesSelector';
import { listenToEntitesByList, stopListenToEntitiesByList, clearAllEntities } from '../actions/entities';
import { connect } from 'react-redux';

//set all sub entites of the active entity as props, also set active entity as props
function mapStateToProps(state) {
  return {
    activeEntity: state.activeEntity,
    allSubEntities: SubEntitiesSelector(state)
  };
}

export default connect(mapStateToProps, {listenToEntitesByList, stopListenToEntitiesByList, clearAllEntities})(EntityList);
