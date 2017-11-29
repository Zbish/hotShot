import { ADD_PERSON, DELETE_PERSON,ADD_LIGA } from './actionNames';

export function addNewLiga(name) {
  return {
    type: ADD_LIGA,
    name,
  };
}