import { ADD_PERSON, DELETE_PERSON,ADD_LIGA } from './actionNames';

export function addNewLiga(league) {
  return {
    type: ADD_LIGA,
    league,
  };
}