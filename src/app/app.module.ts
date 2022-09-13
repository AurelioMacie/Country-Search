import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisaComponent } from './componentes/pesquisa/pesquisa.component';
import { PlanoFundoComponent } from './componentes/plano-fundo/plano-fundo.component';
import { FundoBrancooComponent } from './componentes/fundo-brancoo/fundo-brancoo.component';
import { BarraApelidoComponent } from './componentes/barra-apelido/barra-apelido.component';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaComponent,
    PlanoFundoComponent,
    FundoBrancooComponent,
    BarraApelidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
