import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaFuncionarioComponent } from './paginas/lista-funcionario/lista-funcionario.component';

const routes: Routes = [{path: '', component: ListaFuncionarioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
