import EntityList from '../views/components/entitiesExplorer/listView/CMP_entityList';
import SubEntitiesSelector from '../core/selectors/SL_subEntitiesSelector';
import { listenToEntitesByList, stopListenToEntitiesByList, clearAllEntities } from '../core/actions/AC_entities';
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
