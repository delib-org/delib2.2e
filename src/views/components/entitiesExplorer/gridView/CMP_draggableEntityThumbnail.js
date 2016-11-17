import React, {Component} from 'react';
import DraggableItem from '../../draggable/CMP_draggableItem';
import Thumbnail from './CMP_entityThumbnail';


class DraggedEntityThumbnail extends Component {
  beginDrag(props) {
    const { entityName } = props;
      return {entityName, previewProps: {entityName}}
  }
  render() {
    const DraggedEntity = DraggableItem("ENTITY", {dragHandlers: {beginDrag: this.beginDrag},
                                                   dropHandlers: {} })(Thumbnail);
    return (
      <DraggedEntity className="entity-grid-thumbnail col s6 m3 l2 center-align" {...this.props}/>
    )
  }
}


export default DraggedEntityThumbnail;
