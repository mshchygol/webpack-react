/*
 * action types
 */

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

/*
 * action creators
 */
export function decrementCounter() {
  return {
    type: DECREMENT
  }
}

export function incrementCounter() {
  return {
    type: INCREMENT
  }
}