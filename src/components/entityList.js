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

  constructor(props) {
    super(props);
    this.state =  {
      lazyLoadState: {
        lastLoadedEntityIdx: 0,
        nextLoadScrollPosition: 756,
        numberToLoad: 9,
        elementsToLoadHeight: 756,
        currLoadedSubEntities: []
      }
    };
  }

  listenToNextSubEntities() {
    const { subEntities } = this.props.activeEntity.entity;
    const { lazyLoadState } = this.state;
    const { numberToLoad, currLoadedSubEntities, lastLoadedEntityIdx } = lazyLoadState;
    const subEntitiesToLoad = subEntities.slice(lastLoadedEntityIdx, lastLoadedEntityIdx+numberToLoad);
    this.setState( {
      lazyLoadState: {
        ...lazyLoadState,
        lastLoadedEntityIdx: lastLoadedEntityIdx + numberToLoad,
        currLoadedSubEntities: subEntitiesToLoad
      }
    });
    this.props.stopListenToEntitiesByList(currLoadedSubEntities);
    this.props.listenToEntitesByList(subEntitiesToLoad);


  }

  componentWillMount() {
    this.listenToNextSubEntities();
  }

  componentWillUpdate() {
    this.listenToScrollChanges();
  }
  listenToScrollChanges() {
    $("#entity-list").scroll(() => {
      const { lazyLoadState } = this.state;
      const { nextLoadScrollPosition, elementsToLoadHeight} = lazyLoadState;
      if($("#entity-list").scrollTop() >= nextLoadScrollPosition - $("#entity-list").height()) {
        console.log("BOOOM!");
        this.setState( {
          lazyLoadState: {
            ...lazyLoadState,
            nextLoadScrollPosition: nextLoadScrollPosition + elementsToLoadHeight
          }
        })
        this.listenToNextSubEntities();
      }
    });
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

    return _.sortBy(allSubEntities, (o) => o.dateAdded ).map((entity) => {
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
        <ul id="entity-list" className="collection entity-ul">
          {this.renderEntityList()}
        </ul>
    )
  }
}
//  {this.props.entities.loading ? <Spinner/> : this.renderEntityList()}

export default EntityList;
