import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import Spinner from './spinner';
import { entityListViewConfig } from '../constants';


class EntityList extends Component
{
  // get access to router context
  static contextTypes = {
    router: PropTypes.object
  };

  //on click, navigate to the clicked entity
  onEntityClick(entity) {
    this.context.router.push(`${entityListViewConfig[entity.entityType].linkTo}${entity.uid}`);
  }

  //returns an mapped array, which each node is an entity wrapped with jsx
  renderEntityList() {
    const { allEntities } = this.props.entities;

    if(allEntities.length == 0) //if there are no sub entities for the active entity, print an no data message
      return (<h4>אין נתונים ביישות - {this.props.activeEntity.title}</h4>);

    return allEntities.map((entity) => {
      return (
        <li className="collection-item avatar entity-li" key={entity.uid} onClick={() => this.onEntityClick(entity)}>
            <div className="avatar-container">
              <i className="material-icons circle red darken-4">{entityListViewConfig[entity.entityType].avatar}</i>
            </div>
            <div>
              <span className="title"><b>{entity.title}</b></span>
              <p>{entity.description}</p>
            </div>
            <div className="left-icon-container">
              <a href="#!" className="secondary-content left-icon"><i className="material-icons">public</i></a>
            </div>
        </li>
      )
    })

  }

  render(){
    return(
        <ul className="collection entity-ul">
           {this.props.entities.loading ? <Spinner/> : this.renderEntityList()}
        </ul>
    )
  }
}

export default EntityList;
