import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/funcionario';
import { FuncionarioService } from 'src/app/funcionario.service';

@Component({
  selector: 'app-search-funcionarios',
  templateUrl: './search-funcionarios.component.html',
  styleUrls: ['./search-funcionarios.component.css']
})
export class SearchFuncionariosComponent implements OnInit {
 
  age: number;
  funcionarios: Funcionario[];
 
  constructor(private dataService: FuncionarioService) { }
 
  ngOnInit() {
    this.age = 0;
  }
 
  private searchFuncionarios() {
    this.funcionarios = [];
    this.dataService.getFuncionariosList()
      .subscribe(funcionarios => this.funcionarios = funcionarios);
  }
 
  onSubmit() {
    this.searchFuncionarios();
  }
}
