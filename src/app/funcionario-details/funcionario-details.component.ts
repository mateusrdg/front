import { Component, OnInit, Input } from '@angular/core';
import { Funcionario } from 'src/app/funcionario';
import { FuncionarioService } from 'src/app/funcionario.service';
import { FuncionariosListComponent } from 'src/app/funcionarios-list/funcionarios-list.component';

@Component({
  selector: 'app-funcionario-details',
  templateUrl: './funcionario-details.component.html',
  styleUrls: ['./funcionario-details.component.css']
})
export class FuncionarioDetailsComponent implements OnInit {
 
  @Input() funcionario: Funcionario;
 
  constructor(private funcionarioService: FuncionarioService, private listComponent: FuncionariosListComponent) { }
 
  ngOnInit() {
  }
 
  updateActive(isActive: boolean) {
    this.funcionarioService.updateFuncionario(this.funcionario.id,
      { name: this.funcionario.nome, id: this.funcionario.id, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.funcionario = data as Funcionario;
        },
        error => console.log(error));
  }
 
  deleteCustomer() {
    this.funcionarioService.deleteFuncionario(this.funcionario.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}
