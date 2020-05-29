import { createAction, props } from '@ngrx/store';
import { Evento } from './model/Evento'

export const Agregar = createAction('[event] Agregar',
  props<{ evento: Evento }>());
export const Modificar = createAction('[event] Modificar',
  props<{ evento: Evento }>());
export const Listar = createAction('[event] Listar');