import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
 
  private baseUrl = 'http://localhost:8080/api/funcionarios';
 
  constructor(private http: HttpClient) { }
 
  getFuncionario(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createFuncionario(funcionario: any): Observable<any> {
    return this.http.post(this.baseUrl, funcionario);
  }
 
  updateFuncionario(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteFuncionario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
 
  getFuncionariosList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
 
  //getCustomersByAge(age: number): Observable<any> {
  //  return this.http.get(`${this.baseUrl}/age/${age}`);
  //}
 
  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}