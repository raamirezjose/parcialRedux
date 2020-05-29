import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../model/Evento';
import { Store } from '@ngrx/store';
import * as actions from '../events.actions';

@Component({
  selector: 'app-modificar-eventos',
  templateUrl: './modificar-eventos.component.html',
  styleUrls: ['./modificar-eventos.component.scss']
})

export class ModificarEventosComponent implements OnInit {
  eventos: [Evento];
  evento: Evento;
  id: number;

  @Input() NombreEvento: string;
  @Input() DescripcionEvento: string;
  @Input() FechaEvento: string;
  @Input() EstadoEvento: string;

  constructor(private store: Store<Evento>) { }

  ngOnInit(): void {
    this.store.subscribe((eventReducer) => {
      let eventos = eventReducer;
      for (const llave in eventReducer) {
        if (llave === 'eventReducer') {
          const lista = eventReducer[llave];
          this.eventos = lista;
        }
        else if (llave === 'idReducer') {
          const id = eventReducer[llave];
          const lista: [] = eventReducer['eventReducer'];
          const objEvento: Evento = lista.find(evento => evento['Id'] == id);
          if (objEvento) {
            this.id = id;
            this.NombreEvento = objEvento.Nombre;
            this.DescripcionEvento = objEvento.Descripcion;
            this.FechaEvento = objEvento.Fecha;
            this.EstadoEvento = objEvento.Estado;
          }
        }
      }
    });
  }

  ModificarEvento() {
    let eventoIn: Evento = {
      Id: this.id,
      Nombre: this.NombreEvento,
      Descripcion: this.DescripcionEvento,
      Fecha: this.FechaEvento,
      Estado: this.EstadoEvento
    }
    this.store.dispatch(actions.Modificar({ eventoIn }));
    this.LimpiarForm();
  }

  LimpiarForm() {
    this.NombreEvento = "";
    this.DescripcionEvento = "";
    this.FechaEvento = "";
    this.EstadoEvento = "";
  }
}
