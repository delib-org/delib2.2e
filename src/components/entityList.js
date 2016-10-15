import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import Spinner from './spinner';
import { entityListViewConfig,
         resetLazyLoadState,
         SCROLL_UP,
         SCROLL_DOWN
       } from '../constants';


class EntityList extends Component
{
  // get access to router context
  static contextTypes = {
    router: PropTypes.object
  };

  lazyLoadState = resetLazyLoadState;
  currActiveEntityUid = this.props.activeEntity.entity.uid;
  loadByScrollHelpers = {
    SCROLL_DOWN: (subEntities, numberToLoad, lastLoadedEntityIdx) => {
      const subEntitiesToLoad = subEntities.slice(lastLoadedEntityIdx,
                                                  lastLoadedEntityIdx+numberToLoad);
      this.lazyLoadState =  {
        ...this.lazyLoadState,
        lastLoadedEntityIdx: lastLoadedEntityIdx + numberToLoad,
        currLoadedSubEntities: subEntitiesToLoad
      };
      return subEntitiesToLoad;
    },

    SCROLL_UP: (subEntities, numberToLoad, lastLoadedEntityIdx) => {
      const subEntitiesToLoad = subEntities.slice(lastLoadedEntityIdx-numberToLoad*2,
                                                  lastLoadedEntityIdx-numberToLoad);
      this.lazyLoadState = {
        ...this.lazyLoadState,
        lastLoadedEntityIdx: lastLoadedEntityIdx-numberToLoad,
        currLoadedSubEntities: subEntitiesToLoad
      };
      return subEntitiesToLoad;
    }
  }


  listenToNextSubEntitiesByScroll(scrollType, subEntities) {
    const lazyLoadState = this.lazyLoadState;
    const { numberToLoad, currLoadedSubEntities, lastLoadedEntityIdx } = lazyLoadState;
    const subEntitiesToLoad = this.loadByScrollHelpers[scrollType](subEntities, numberToLoad, lastLoadedEntityIdx );
    this.props.stopListenToEntitiesByList(currLoadedSubEntities);
    this.props.listenToEntitesByList(subEntitiesToLoad);
  }

  handleSrollChange() {
    const lazyLoadState = this.lazyLoadState;
    const { scrollDownLoadPosition, scrollUpLoadPosition, elementsToLoadHeight} = lazyLoadState;
    const { subEntities } = this.props.activeEntity.entity;
    if($("#entity-list").scrollTop() >= scrollDownLoadPosition - $("#entity-list").height()) {
      this.lazyLoadState = {
        ...lazyLoadState,
        scrollUpLoadPosition: scrollDownLoadPosition,
        scrollDownLoadPosition: scrollDownLoadPosition + elementsToLoadHeight
      };
      this.listenToNextSubEntitiesByScroll(SCROLL_DOWN, subEntities);
    }
    else if($("#entity-list").scrollTop() <= scrollUpLoadPosition - $("#entity-list").height()) {
      this.lazyLoadState = {
        ...lazyLoadState,
        scrollUpLoadPosition: scrollUpLoadPosition - elementsToLoadHeight,
        scrollDownLoadPosition: scrollUpLoadPosition
      };
      this.listenToNextSubEntitiesByScroll(SCROLL_UP, subEntities);
    }
  }

  //on click, navigate to the clicked entity
  onEntityClick(entity) {
    this.context.router.push(`${entityListViewConfig[entity.entityType].linkTo}${entity.uid}`);
  }

  //returns an mapped array, which each node is an entity wrapped with jsx
  renderEntityList() {
    const { allSubEntities } = this.props;

    if(allSubEntities.length == 0) //if there are no sub entities for the active entity, print an no data message
      return (<h4>אין נתונים ביישות - {this.props.activeEntity.title}</h4>);

    return allSubEntities.map((entity) => {
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

  componentWillMount() {
    this.listenToNextSubEntitiesByScroll(SCROLL_DOWN, this.props.activeEntity.entity.subEntities);
  }

  componentWillReceiveProps(nextProps) {
    if(this.currActiveEntityUid != nextProps.activeEntity.entity.uid) {
      this.currActiveEntityUid = nextProps.activeEntity.entity.uid;
      this.lazyLoadState = resetLazyLoadState;
      this.props.clearAllEntities();
      this.listenToNextSubEntitiesByScroll(SCROLL_DOWN, nextProps.activeEntity.entity.subEntities);
    }
  }


  componentWillUpdate() {
    $("#entity-list").scroll(this.handleSrollChange.bind(this));
  }

  render(){
    return(
        <ul id="entity-list" className="collection entity-ul">
           {this.renderEntityList()}
        </ul>
    )
  }
}


export default EntityList;
