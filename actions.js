import { ADD_PERSON, DELETE_PERSON,ADD_LIGA } from './constants';

export function addPerson(person) {
  return {
    type: 'ADD_PERSON',
    person,
  };
}

export function deletePerson(person) {
  return {
    type: 'DELETE_PERSON',
    person,
  };
}

export function addNewLiga(name) {
  return {
    type: 'ADD_LIGA',
    name,
  };
}