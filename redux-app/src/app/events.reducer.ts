import { createReducer, on } from '@ngrx/store';
import { events } from './fake-data/fake-events'
import { Evento } from './model/Evento';
import { Agregar, Modificar } from './events.actions';
import { from } from 'rxjs';

export let eventos = events;

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
  }),
);