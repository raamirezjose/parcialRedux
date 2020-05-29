import { Component, OnInit, Input, Output } from '@angular/core';
import { __importDefault } from 'tslib';
import { EventEmitter } from 'protractor';
import { Store, select, State } from '@ngrx/store';
import { multiplicar, dividir } from 'src/app/events.actions';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent implements OnInit {
  contador: number;
  //@Output() cambioContador = new EventEmitter<number>();
  constructor(private store: Store<AppState>) {
    this.store.subscribe((state) => {
      this.contador = state.contador;
    });
  }

  ngOnInit(): void {}

  Multiplicar() {
    this.store.dispatch(multiplicar({ numero: 2 }));
    //this.contador = this.contador * 2;
    //this.cambioContador.emit(this.contador);
  }

  Dividir() {
    this.store.dispatch(dividir({ numero: 2 }));
    //this.contador = this.contador / 2;
    //this.cambioContador.emit(this.contador);
  }
  limpiar(contador) {
    this.contador = contador;
    //this.cambioContador.emit(this.contador);
  }
}
