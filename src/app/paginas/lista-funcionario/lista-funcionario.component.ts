import { Component, OnInit, ViewChild } from '@angular/core';
import { Funcionario } from 'src/app/interfaces/funcionario';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-lista-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrls: ['./lista-funcionario.component.css']
})
export class ListaFuncionarioComponent implements OnInit {
  public funcionarios: Funcionario[];
  @ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;

  constructor(private funcionarioService: FuncionarioService) { }
  ngOnInit() {
    this.getListaFuncionarios();
  }

  getListaFuncionarios() {
    this.funcionarioService.getListaFuncionarios()
    .subscribe((funcionarios: Funcionario[]) => {
      this.funcionarios = funcionarios;
    }, () => {this.errorMsgComponent.setError('Falha ao buscar funcionarios'); });
  }

  deletaFuncionario(id: number) {
    this.funcionarioService.deletaFuncionario(id)
    .subscribe(() => {
      this.getListaFuncionarios();
    }, () => {this.errorMsgComponent.setError('Falha ao deletar funcionario'); });
  }

  existemFuncionarios(): boolean {
    return this.funcionarios && this.funcionarios.length > 0;
  }
}
