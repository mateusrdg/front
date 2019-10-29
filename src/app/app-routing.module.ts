import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaFuncionarioComponent } from './paginas/lista-funcionario/lista-funcionario.component';
import { CriarFuncionarioComponent } from './paginas/criar-funcionario/criar-funcionario.component';
import { EditarFuncionarioComponent } from './paginas/editar-funcionario/editar-funcionario.component';

const routes: Routes = [
  {path: '', component: ListaFuncionarioComponent},
  {path: 'funcionario/criar', component: CriarFuncionarioComponent},
  {path: 'funcionario/editar/:id', component: EditarFuncionarioComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
