import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionariosListComponent } from 'src/app/funcionarios-list/funcionarios-list.component';
import { CreateFuncionarioComponent } from 'src/app/create-funcionario/create-funcionario.component';
import { SearchFuncionariosComponent } from 'src/app/search-funcionarios/search-funcionarios.component';


const routes: Routes = [{ path: '', redirectTo: 'funcionario', pathMatch: 'full' },
{ path: 'funcionario', component: FuncionariosListComponent },
{ path: 'add', component: CreateFuncionarioComponent },
{ path: 'findbyid', component: SearchFuncionariosComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
