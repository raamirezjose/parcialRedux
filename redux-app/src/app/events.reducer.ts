import { createReducer, on } from '@ngrx/store';
import { events } from './fake-data/fake-events'
import { Evento } from './model/Evento';
import { Agregar, Modificar, CambiarId } from './events.actions';
import { from } from 'rxjs';

let eventos = events;
let initialId = 0;

export const eventReducer = createReducer(
  eventos,
  //Agregar eventos
  on(Agregar, (state, { eventoIn }) => {
    const listaEventos = [
      ...state,
      {
        ...eventoIn
      }
    ];
    return listaEventos
  }),

  //Modificar eventos
  on(Modificar, (state, { eventoIn }) => {
    const listaModificada = state.map(evento => {
      if(evento.Id === eventoIn.Id){
        return eventoIn;
      }
      return evento;
    });
    return listaModificada;
  })
);

export const idReducer = createReducer(
  initialId,
  on(CambiarId, (state, { id } ) => id)
);
