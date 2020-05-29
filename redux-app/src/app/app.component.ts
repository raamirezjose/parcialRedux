import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as actions from './events.actions';
import { Evento } from './model/Evento';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  eventos: [Evento];

  constructor(private store: Store<[Evento]>) {

    this.store.subscribe((state) => {
      this.eventos = state;
    });

  }

  AgregarEvento(eventoIn: Evento) {
    this.store.dispatch(actions.Agregar({ eventoIn }));
  }

  
  ModificarEvento(eventoIn: Evento) {
    this.store.dispatch(actions.Modificar({ eventoIn }));
  }

}
