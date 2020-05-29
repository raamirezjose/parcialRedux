import { Action, createReducer, on, State, props } from '@ngrx/store';
import {
  Agregar,
  Modificar,
  Listar
} from './events.actions';

export const estadoInicial = 20;

const eventReducer = createReducer(
  estadoInicial,
  on(Agregar, (state, { evento }) => state + 1),
  on(Modificar, (state, { evento }) => state - 1),
  on(Listar, (state) => state)
);