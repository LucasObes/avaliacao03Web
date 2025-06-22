import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Cadastro {
  id: number,
  nome: string,
  departamento: string,
  endereco: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})

export class CadastroService {
  private urlBase = 'https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/';

  constructor(private http: HttpClient) { }

  consultarCadastro(id: number): Observable<Cadastro> {
    return this.http.get<Cadastro>(`${this.urlBase}${id}`);
  }

  excluirCadastro(id: number): Observable<{ status: string, mensagem: string }> {
    return this.http.delete<{ status: string, mensagem: string }>(`${this.urlBase}${id}`);
  }

  alterarCadastro(id: number, dados: Cadastro): Observable<{ status: string, mensagem: string }> {
    return this.http.put<{ status: string, mensagem: string }>(`${this.urlBase}${id}`, dados);
  }
}
