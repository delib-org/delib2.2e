import EntityList from '../views/components/CMP_entityList';
import SubEntitiesSelector from '../selectors/SL_subEntitiesSelector';
import { listenToEntitesByList, stopListenToEntitiesByList, clearAllEntities } from '../actions/AC_entities';
import { connect } from 'react-redux';

//set all sub entites of the active entity as props, also set active entity as props
function mapStateToProps(state) {
  return {
    activeEntity: state.activeEntity,
    allSubEntities: SubEntitiesSelector(state),
    firebaseLoading: state.firebaseLoading
  };
}

export default connect(mapStateToProps, {listenToEntitesByList, stopListenToEntitiesByList, clearAllEntities})(EntityList);
