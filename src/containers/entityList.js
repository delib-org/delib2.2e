import EntityList from '../components/entityList';
import SubEntitiesSelector from '../selectors/subEntitiesSelector';
import { listenToEntitiesUpdates, setActiveEntity } from '../actions/entities';
import { connect } from 'react-redux';

//set all sub entites of the active entity as props, also set active entity as props
function mapStateToProps(state) {
  return {
    entities: SubEntitiesSelector(state),
    activeEntity: state.activeEntity
  };
}

export default connect(mapStateToProps, {listenToEntitiesUpdates, setActiveEntity})(EntityList);
