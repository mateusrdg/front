import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Funcionario } from 'src/app/interfaces/funcionario';

@Component({
  selector: 'app-form-funcionario',
  templateUrl: './form-funcionario.component.html',
  styleUrls: ['./form-funcionario.component.css']
})
export class FormFuncionarioComponent {
  @Input() funcionario: Funcionario = <Funcionario> {};
  @Output() outputFuncionario: EventEmitter<Funcionario> = new EventEmitter();

  onSubmit() {
    this.outputFuncionario.emit(this.funcionario);
  }
}
