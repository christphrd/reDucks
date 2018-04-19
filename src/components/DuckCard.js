import React from 'react';
import { Card } from 'semantic-ui-react'
import {upVote, downVote, cutieSwitch} from '../actions.js'
import {connect} from 'react-redux'

const DuckCard = props => {
  const duckVote = () => {
    props.dispatchUpvote(props.duck.id)
  }

  const downVoteDatDuck = () => {
    props.dispatchDownvote(props.duck.id)
  }

  //2. Function called from event. Have it be part of the mapDispatchToProps object
  const cutieSwitch = () => {
    //**********
    props.dispatchCutieSwitch(props.duck.id)
    //**********
  }

  const isThisDuckACutie = `T/F is this duck a cutie? ${props.duck.isCutie.toString()}`;
  const description = `Votes for Dankness: ${props.duck.votes}`;
  return (
    <div>
      <Card
        image={props.duck.image}
        header={props.duck.name}
        meta={isThisDuckACutie}
        description={description}

      />
      <div className="quacker">
        {/* 1. Make your event that calls on a function */}
        <button onClick={cutieSwitch}> Swanify or De-Swanify </button>
        <button onClick={duckVote}> + </button>
        <button onClick={downVoteDatDuck}> - </button>
      </div>
    </div>
  )
}

//3. Called from event's function. It will go to actions so that it can go through the rootReducer. key is from the event's function. value is a function that comes from actions.js. Go to actions.js
const mapDispatchToProps = dispatch => {
  return {
    dispatchUpvote: id => dispatch(upVote(id)),
    dispatchDownvote: id => dispatch(downVote(id)),
    //******
    dispatchCutieSwitch: id => dispatch(cutieSwitch(id))
    //******
  }
}

export default connect(null, mapDispatchToProps)(DuckCard)
