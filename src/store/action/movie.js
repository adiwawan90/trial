import { GET_DETAIL } from '../../constans/types/movie';

export const populateDetails = (payload = {}) => ({
  type: GET_DETAIL,
  payload: payload,
});
