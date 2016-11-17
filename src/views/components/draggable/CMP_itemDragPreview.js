import React, { PropTypes, Component } from 'react';
import { DragLayer } from 'react-dnd';

//style the dargged item and make its position fixed
//so we can change its position later.
const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  left: 0,
  top: 0,
  opacity: 0.5
};

const getItemStyles = (props) => {
  //currentOffset is injected by react-dnd to props when dragging.
  //if we are not dragging don't display any preview.
  //if we started to drag, translate the drag position by transform.
  const { currentOffset } = props;
  if (!currentOffset) {
    return {
      display: 'none'
    };
  }

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform: transform,
  };
}

const collect = (monitor) => {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  };
}


export default (ComposedComponent) => {
  class itemDragPreview extends Component {
    render() {
      //props injected by react-dnd
      //if we are not dragging, return nothing.
      const { item, isDragging } = this.props;
      if (!isDragging) {
        return null;
      }

      return (
        <div style={layerStyles}>
          <div style={getItemStyles(this.props)}>
            <ComposedComponent {...item.previewProps}/>
          </div>
        </div>
      );
    }
  }

  return DragLayer(collect)(itemDragPreview);
}
