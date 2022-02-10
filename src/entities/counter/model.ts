import {createEvent, createStore} from 'effector';

export const countPlus = createEvent();

export const $count = createStore<number>(0).on(
  countPlus,
  state => (state += 1),
);
