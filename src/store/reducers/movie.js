import { GET_DETAIL } from '../../constans/types/movie';

const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DETAIL:
      return action.payload;

    default:
      return state;
  }
}
