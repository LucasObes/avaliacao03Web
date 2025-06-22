import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Funcionario {
  id: number;
  nome: string;
  foto: string;
  email: string;
  subobjeto: {
    propriedade1: string;
    propriedade2: string;
  };
}

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {
  private url = 'assets/exemploJSON.json';

  constructor(private http: HttpClient) { }

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.url);
  }
}