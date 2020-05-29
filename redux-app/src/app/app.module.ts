import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { eventReducer } from './events.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { CrearEventosComponent } from './crear-eventos/crear-eventos.component';
import { ModificarEventosComponent } from './modificar-eventos/modificar-eventos.component';

@NgModule({
  declarations: [AppComponent, ListaEventosComponent, CrearEventosComponent, ModificarEventosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ eventReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
