import { Component } from '@angular/core';
import { Store, select, State } from '@ngrx/store';

import * as actions from './events.actions';
import { from } from 'rxjs';

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
    
    this.store.subscribe((state) => {
      this.contador = state.contador;
    });
  }

  AgregarEvento() {
    this.store.dispatch(actions.aumentar());
  }

  ModificarEvento() {
    this.store.dispatch(actions.disminuir());
  }
}
