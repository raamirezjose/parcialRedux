import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Store } from '@ngrx/store';
import { resetear } from 'src/app/contador.actions';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss'],
})
export class NietoComponent implements OnInit {
  @Input() contador: number;
  //@Output() eventoContador =new EventEmitter<number>();
  constructor(private store: Store<AppState>) {
    this.store.subscribe((state) => {
      this.contador = state.contador;
    });
  }

  ngOnInit(): void {}
  Limpiar() {
    this.store.dispatch(resetear());
    //this.eventoContador.emit(this.contador);
  }
}
