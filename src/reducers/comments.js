import { SAVE_COMMENT } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case SAVE_COMMENT:
    // following line is the same as: return state.concat([action.payload]);
    return [...state, action.payload ];
  }

  return state;

}
