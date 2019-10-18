import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CreateFuncionarioComponent } from './create-funcionario/create-funcionario.component';
import { FuncionarioDetailsComponent } from './funcionario-details/funcionario-details.component';
import { FuncionariosListComponent } from './funcionarios-list/funcionarios-list.component';
import { SearchFuncionariosComponent } from './search-funcionarios/search-funcionarios.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFuncionarioComponent,
    FuncionarioDetailsComponent,
    FuncionariosListComponent,
    SearchFuncionariosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
