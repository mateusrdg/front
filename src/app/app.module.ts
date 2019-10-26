import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { ListaFuncionarioComponent } from './paginas/lista-funcionario/lista-funcionario.component';
import { FormFuncionarioComponent } from './compartilhado/form-funcionario/form-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgComponent,
    ListaFuncionarioComponent,
    FormFuncionarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
