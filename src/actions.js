export let upVote = duckId => {
  return({
    type: "INCREASE_VOTE",
    payload:{
      duckId: duckId
    }
  })
}

export let downVote = duckId => {
  return({
    type: "DECREASE_VOTE",
    payload:{
      duckId: duckId
    }
  })
}

//4. action going to the reducer. Action is an object with type that is a string & payload
export let cutieSwitch = duckId => {
  return({
    type: "CUTIE_SWITCH",
    payload:{
      duckId: duckId
    }
  })
}
