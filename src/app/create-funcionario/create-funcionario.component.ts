import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/funcionario';
import { FuncionarioService } from 'src/app/funcionario.service';

@Component({
  selector: 'app-create-funcionario',
  templateUrl: './create-funcionario.component.html',
  styleUrls: ['./create-funcionario.component.css']
})
export class CreateFuncionarioComponent implements OnInit {
 
  funcionario: Funcionario = new Funcionario();
  submitted = false;
 
  constructor(private funcionarioService: FuncionarioService) { }
 
  ngOnInit() {
  }
 
  newCustomer(): void {
    this.submitted = false;
    this.funcionario = new Funcionario();
  }
 
  save() {
    this.funcionarioService.createFuncionario(this.funcionario)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.funcionario = new Funcionario();
  }
 
  onSubmit() {
    this.save();
  }
}
