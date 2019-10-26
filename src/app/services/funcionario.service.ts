import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../interfaces/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  getListaFuncionarios(): Observable<Funcionario[]> {
    const url = `${environment.ApiUrl}/funcionarios`;
    return this.http.get<Funcionario[]>(url);
  }
  getFuncionario(id: number): Observable<Funcionario> {
    const url = `${environment.ApiUrl}/funcionarios/${id}`;
    return this.http.get<Funcionario>(url);
  }
  addFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    const url = `${environment.ApiUrl}/funcionarios/`;
    return this.http.post<Funcionario>(url, funcionario);
  }
  atualizaFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    const url = `${environment.ApiUrl}/funcionarios/`;
    return this.http.put<Funcionario>(url, funcionario);
  }
  deletaFuncionario(id: number): Observable<Funcionario> {
    const url = `${environment.ApiUrl}/funcionarios/${id}`;
    return this.http.delete<Funcionario>(url);
  }
}
