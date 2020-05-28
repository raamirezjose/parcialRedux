import { Component } from '@angular/core';
import { Store, select, State } from '@ngrx/store';
import { timingSafeEqual } from 'crypto';
import { stat } from 'fs';
import * as actions from './contador.actions';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  contador: number;

  constructor(private store: Store<AppState>) {
    //this.contador = 10;
    this.store.subscribe((state) => {
      //console.log(state);
      this.contador = state.contador;
      console.log(this.contador);
    });
  }

  Aumentar() {
    this.store.dispatch(actions.aumentar());
    //this.contador++;
  }

  Disminuir() {
    this.store.dispatch(actions.disminuir());
    //this.contador--;
  }
}
