import { Action, createReducer, on, State, props } from '@ngrx/store';
import {
  aumentar,
  disminuir,
  multiplicar,
  dividir,
  resetear,
} from './contador.actions';

export const estadoInicial = 20;

const _contadorReducer = createReducer(
  estadoInicial,
  on(aumentar, (state) => state + 1),
  on(disminuir, (state) => state - 1),
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero),
  on(resetear, (state) => estadoInicial)
);

export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}

/* export function contadorRedurcer(state: number = 10, action: Action) {
  switch (action.type) {
    case aumentar.type:
      return state + 1;

    case disminuir.type:
      return state - 1;

    default:
      return state;
  }
} */
