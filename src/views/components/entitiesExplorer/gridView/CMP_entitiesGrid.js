import React, {Component} from 'react';
import DraggableThumbnail from './CMP_draggableEntityThumbnail';
import Thumbnail from './CMP_entityThumbnail';
import ItemDragPreview from '../../draggable/CMP_itemDragPreview';

class EntitiesGrid extends Component {
  render() {
    const ItemPreview = ItemDragPreview(Thumbnail);
    return (
      <div className="entity-grid">
        <div className="row">
          <DraggableThumbnail entityName="Eilon"/>
          <DraggableThumbnail entityName="Mor"/>
          <DraggableThumbnail entityName="Whatsapp"/>
          <DraggableThumbnail entityName="Hey there"/>
          <DraggableThumbnail entityName="yoo"/>
          <DraggableThumbnail entityName="sas"/>
          <DraggableThumbnail entityName="sdsa"/>
          <DraggableThumbnail entityName="sds"/>
          <DraggableThumbnail entityName="tty"/>
          <DraggableThumbnail entityName="uuu"/>
          <ItemPreview/>

        </div>
      </div>
    )
  }
}

export default EntitiesGrid;
