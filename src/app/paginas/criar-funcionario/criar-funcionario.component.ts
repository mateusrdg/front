import { Component, ViewChild } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Router } from '@angular/router';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { Funcionario } from 'src/app/interfaces/funcionario';

@Component({
  selector: 'app-criar-funcionario',
  templateUrl: './criar-funcionario.component.html',
  styleUrls: ['./criar-funcionario.component.css']
})
export class CriarFuncionarioComponent   {
  @ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;
  constructor(private funcionarioService: FuncionarioService, private router: Router) { }

  addFuncionario(funcionario: Funcionario) {
    this.funcionarioService.addFuncionario(funcionario)
    .subscribe(
      () => { this.router.navigateByUrl('/'); },
      () => { this.errorMsgComponent.setError('Falha ao adicionar Funcionario'); });
  }
}
