import React, {Component} from 'react';
import {DragSource, DropTarget} from 'react-dnd';
import ItemDragPreview from './CMP_itemDragPreview';

//This Component wraps any other component/element and make it draggable
export default (type, handlers) => {
  let { dragHandlers, dropHandlers } = handlers;

  dragHandlers = {
    beginDrag(props) {
      return {};
    },
    ...dragHandlers
  }

  function collectDrag(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging()
    };
  }

  function collectDrop(connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver()
    };
  }

  return (ComposedComponent) => {
    class DraggableItem extends ComposedComponent {
      render() {
        const {connectDragSource, connectDropTarget, connectDragPreview, isOver} = this.props;
        const renderTree = super.render();
        const draggebleContent = connectDragPreview(connectDragSource(connectDropTarget(renderTree)));
        return (
          <div className = {this.props.className} style={(isOver) ? {backgroundColor:"rgba(0,0,0,0.1)"} : {}}>
            {draggebleContent}
          </div>
        )
      }
    }

    return _.flow(
          DragSource(type, dragHandlers, collectDrag),
          DropTarget(type, dropHandlers, collectDrop)
        )(DraggableItem);

  }

}
