import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initalState = {
  items: [
    { id: uuid(), name: 'Eggs' },
    { id: uuid(), name: 'Apple Sauce' },
    { id: uuid(), name: 'Steak' },
    { id: uuid(), name: 'Water' },
  ],
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };
      break;
    default:
      return state;
      break;
  }
}
