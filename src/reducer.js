// import mattsduck from '../mattsduck.png';
// import morphintime from '../morphintime.png';
// import niceduck from '../niceduck.png';
// import dd from '../dd.jpg';

const defaultState = {
    ducks: {
      one: { id: 'one', name: 'Masterpiece', age: 1, image: '', votes: 0, isCutie: false },
      two: { id: 'two', name: 'Garrette', age: 2, image: 'https://vignette.wikia.nocookie.net/animorphs/images/b/b8/Animorphs_51_absolute_front_cover_scholastic.jpg/revision/latest/scale-to-width-down/341?cb=20180415110651', votes: 0, isCutie: true },
      three: { id: 'three', name: 'nice lil plump boi who would make for delicious dinner', age: 3, image: 'https://i.imgur.com/dyy5tkU.jpg', votes: 0, isCutie: false },
      four: { id: 'four', name: 'DD the OG duck', age: 4, image: 'https://vignette.wikia.nocookie.net/disney/images/a/ac/Disneys_donald_duck-1062.jpg/revision/latest?cb=20130907032143', votes: 0, isCutie: true }
    }
  }

export function rootReducer(state = defaultState, action){
  switch(action.type) {
    case 'INCREASE_VOTE':
      return {
          ducks: {
            ...state.ducks,
            [action.payload.duckId]: {
              ...state.ducks[action.payload.duckId],
              votes: state.ducks[action.payload.duckId].votes + 1
            }
          }
        }
    case 'DECREASE_VOTE':
      return {
        ducks: {
            ...state.ducks,
            [action.payload.duckId]: {
              ...state.ducks[action.payload.duckId],
              votes: state.ducks[action.payload.duckId].votes - 1
            }
          }
      }
    //5. Hits the switch statement and then updates the state for re-rendering.
    case 'CUTIE_SWITCH':
      return {
        //Note: make sure to make a copy and overwrite the value being changed.
        ducks: {
          ...state.ducks,
          [action.payload.duckId]: {
            ...state.ducks[action.payload.duckId],
            isCutie: !(state.ducks[action.payload.duckId].isCutie)
          }
        }
      }
    default:
      return state;
  }
}
