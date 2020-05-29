import { createAction, props } from '@ngrx/store';
import { Evento } from './model/Evento'

export const Agregar = createAction('Agregar',
  props<{ eventoIn: Evento }>()
);
export const Modificar = createAction('Modificar',
  props<{ eventoIn: Evento }>()
);