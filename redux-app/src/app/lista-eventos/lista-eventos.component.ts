import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Evento } from '../model/Evento';
import * as actions from '../events.actions';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.scss']
})

export class ListaEventosComponent implements OnInit {
  eventos:[Evento];
  id:Number

  constructor(private store: Store<Evento>) {}

  ngOnInit(): void {
    this.store.subscribe(( eventReducer ) => {
      for (const llave in eventReducer) {
        if(llave === 'eventReducer'){
          const lista = eventReducer[llave];
          this.eventos = lista;
        }
        else if(llave === 'idReducer'){
          const id = eventReducer[llave];
          this.id = id;
        }
      }
    });
  }

  CambiarId(id){
    this.store.dispatch(actions.CambiarId( {id} ));
  }

}
