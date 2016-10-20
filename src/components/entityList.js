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
  //Some helpers for to keep tracking about lazy loading
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

  //this function gets the scroll type (down or up) and active entity sub entities.
  //it makes firebase stop listening to the previous 20 entities, and start listening to next 20 sub entities
  listenToNextSubEntitiesByScroll(scrollType, subEntities) {
    const lazyLoadState = this.lazyLoadState;
    const { numberToLoad, currLoadedSubEntities, lastLoadedEntityIdx } = lazyLoadState;
    const subEntitiesToLoad = this.loadByScrollHelpers[scrollType](subEntities, numberToLoad, lastLoadedEntityIdx );
    this.props.stopListenToEntitiesByList(currLoadedSubEntities);
    this.props.listenToEntitesByList(subEntitiesToLoad);
  }

  //When scrolling, check whether the user scrolled up or down and check by scroll position if we need to listen to the next sub entitites
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
      console.log("down!!");
      this.listenToNextSubEntitiesByScroll(SCROLL_DOWN, subEntities);
    }
    else if($("#entity-list").scrollTop() <= scrollUpLoadPosition - $("#entity-list").height()) {
      this.lazyLoadState = {
        ...lazyLoadState,
        scrollUpLoadPosition: scrollUpLoadPosition - elementsToLoadHeight,
        scrollDownLoadPosition: scrollUpLoadPosition
      };
      console.log("upp!!");
      this.listenToNextSubEntitiesByScroll(SCROLL_UP, subEntities);

    }

  }

  //on click, navigate to the clicked entity
  onEntityClick(entity) {
    this.context.router.push(`${entityListViewConfig[entity.entityType].linkTo}${entity.uid}`);
  }

  //returns an mapped array of sub entitites, which each node is an entity wrapped with jsx
  renderEntityList() {
    const { allSubEntities } = this.props;

    //show a spinner only if sub entities are loading and there are still no sub entites rendered
    if(this.props.firebaseLoading.type == "SUB_ENTITIES" && this.props.firebaseLoading.isLoading && allSubEntities.length == 0)
      return <Spinner/>

    //if its not loading but the array is still emptey, then there are no sub entities for this particular active entity
    if(allSubEntities.length == 0)
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

  /*will called when the active entity switched (or on initial rende).
    it will update the local temp - currActiveEntityUi, reset lazyLoadState, clear all current rendered subEntities
    and it will listen to the next sub entites. */
  onNewActiveEntity(props) {
    this.currActiveEntityUid = props.activeEntity.entity.uid;
    this.lazyLoadState = resetLazyLoadState;
    props.clearAllEntities();
    this.listenToNextSubEntitiesByScroll(SCROLL_DOWN, props.activeEntity.entity.subEntities);
  }

  componentWillMount() {
    this.onNewActiveEntity(this.props);
  }

  //after the component has renderd, start listen to scroll changes
  componentDidMount() {
    $("#entity-list").scroll(this.handleSrollChange.bind(this));
  }

  /*Check if the active entity has changed. if it has changed, then reset and clean sub entities and lazy load state
    and start listening to the next new sub entites (by calling to onNewActiveEntity)*/
  componentWillReceiveProps(nextProps) {
    if(this.currActiveEntityUid != nextProps.activeEntity.entity.uid) {
      this.onNewActiveEntity(nextProps);
    }
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
