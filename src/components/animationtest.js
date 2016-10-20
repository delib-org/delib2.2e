import React, {Component, PropTypes} from 'react';
import { entityListViewConfig,
         resetLazyLoadState,
         SCROLL_UP,
         SCROLL_DOWN
       } from '../constants';
import _ from 'lodash';
import FlipMove from 'react-flip-move';

const customEnterAnimation = {
  from: { transform: 'scale(0.5, 1)' },
  to:   { transform: 'scale(1, 1)' }
};

class animationList extends Component {
  constructor(props) {
    super(props);

    this.state = { groups: [
      {
        "uid": 1,
        "dateAdded" : 1,
        "description": "A",
        "title": "option1",
        "entityType" : "groups",
        "order" : 1,
        "votes": 2
      },
      {
        "uid": 2,
        "dateAdded" : 2,
        "description": "B",
        "title": "option2",
        "entityType" : "groups",
        "order" : 1,
        "votes": 3
      },
      {
        "uid": 3,
        "dateAdded" : 3,
        "description": "C",
        "title": "option3",
        "entityType" : "groups",
        "order" : 1,
        "votes": 4
      },
      {
        "uid": 4,
        "dateAdded" : 4,
        "description": "D",
        "title": "option4",
        "entityType" : "groups",
        "order" : 1,
        "votes": 2
      }
    ], count: 4};
  }
  renderEntityList() {
    let groups =  _.sortBy(this.state.groups, (o) => o.votes );
    return groups.map((group) => {
      return (
        <li className="collection-item avatar entity-li ques" key={group.uid} onClick = {() => {this.handleClick(group)}}>
            <div className="avatar-container">
              <i className="material-icons circle red darken-4">group</i>
            </div>
            <div>
              <span className="title"><b>{group.title}</b></span>
              <p>{group.votes}</p>
            </div>
            <div className="left-icon-container">
              <a href="#!" className="secondary-content left-icon"><i className="material-icons">public</i></a>
            </div>
        </li>
      )
    })
  }

  handleClick(group) {
    group.votes++;
    this.forceUpdate();
  }
  render () {
    return (
      <ul key={1} onClick = {this.handleClick.bind(this)} className="collection entity-ul">
        <FlipMove duration = {800}>
           {this.renderEntityList()}
         </FlipMove>
      </ul>

    )
  }
}

// <FlipMove staggerDelayBy={50}>
//    {this.renderEntityList()}
//  </FlipMove>

export default animationList;
