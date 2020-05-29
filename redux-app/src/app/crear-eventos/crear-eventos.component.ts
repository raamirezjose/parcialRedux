import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../model/Evento';
import { Store } from '@ngrx/store';
import * as actions from '../events.actions';

@Component({
  selector: 'app-crear-eventos',
  templateUrl: './crear-eventos.component.html',
  styleUrls: ['./crear-eventos.component.scss']
})
export class CrearEventosComponent implements OnInit {
  eventos: [Evento];
  @Input() NombreEvento: string;
  @Input() DescripcionEvento: string;
  @Input() FechaEvento: string;
  @Input() EstadoEvento: string;

  constructor(private store: Store<Evento>) { }

  ngOnInit(): void {
    this.store.subscribe(( eventReducer ) => {
      for (const llave in eventReducer) {
        if(llave === 'eventReducer'){
          const lista = eventReducer[llave];
          this.eventos = lista;
        }
      }
    });
  }

  AgregarEvento() {
    let eventoIn: Evento = {
      Id: this.eventos.length + 1,
      Nombre: this.NombreEvento,
      Descripcion: this.DescripcionEvento,
      Fecha: this.FechaEvento,
      Estado: this.EstadoEvento
    }
    this.store.dispatch(actions.Agregar( {eventoIn} ));
    this.LimpiarForm();
  }

  LimpiarForm(){
    this.NombreEvento = "";
    this.DescripcionEvento = "";
    this.FechaEvento = "";
    this.EstadoEvento = "";
  }
}
