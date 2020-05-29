import { createAction, props } from '@ngrx/store';
import { Evento } from './model/Evento'

export const Agregar = createAction('Agregar',
  props<{ eventoIn }>()
);

export const Modificar = createAction('Modificar',
  props<{ eventoIn }>()
);

export const CambiarId = createAction('CambiarId',
 props<{ id: number }>()
);