import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Evento } from '../model/Evento';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.scss']
})

export class ListaEventosComponent implements OnInit {
  eventos:[Evento];

  constructor(private store: Store<Evento>) {}

  ngOnInit(): void {
    this.store.subscribe(( eventReducer ) => {
      for (const llave in eventReducer) {
          const lista = eventReducer[llave];
          this.eventos = lista;
      }
    });
  }


}
