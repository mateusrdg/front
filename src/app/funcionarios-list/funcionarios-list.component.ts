import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/funcionario.service';
import { Funcionario } from 'src/app/funcionario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-funcionarios-list',
  templateUrl: './funcionarios-list.component.html',
  styleUrls: ['./funcionarios-list.component.css']
})
export class FuncionariosListComponent implements OnInit {
 
  funcionarios: Observable<Funcionario[]>;
 
  constructor(private customerService: FuncionarioService) { }
 
  ngOnInit() {
    this.reloadData();
  }
 
  deleteCustomers() {
    this.customerService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
 
  reloadData() {
    this.funcionarios = this.customerService.getFuncionariosList();
  }
}
