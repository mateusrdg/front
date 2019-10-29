import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { Funcionario } from 'src/app/interfaces/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent   {
  public funcionario: Funcionario;
  @ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;

  constructor(private funcionarioService: FuncionarioService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
                this.getFuncionario(this.activatedRoute.snapshot.params.id);
              }

  getFuncionario(id: number) {
    this.funcionarioService.getFuncionario(id)
    .subscribe((funcionario: Funcionario) => {
      this.funcionario = funcionario;
    }, () => { this.errorMsgComponent.setError('Falha ao buscar lembrete'); });
  }

  atualizaFuncionario(funcionario: Funcionario) {
    this.funcionarioService.atualizaFuncionario(funcionario)
    .subscribe(
      () => { this.router.navigateByUrl('/'); },
      () => { this.errorMsgComponent.setError('Falha ao atualizar Funcionario'); });
  }

}
