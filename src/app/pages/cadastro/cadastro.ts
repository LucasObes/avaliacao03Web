import { Component } from '@angular/core';
import { Cadastro, CadastroService } from '../../services/cadastro-service';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})

export class CadastroPage {
  id: string = '';
  resultado?: Cadastro;
  respostaExclusao?: { status: string, mensagem: string };
  respostaAlteracao?: { status: string, mensagem: string };

  formAlteracao: Cadastro = {
    id: 0,
    nome: '',
    departamento: '',
    endereco: '',
    email: ''
  };

  constructor(private cadastroService: CadastroService) { }

  consultar() {
    const idNum = Number(this.id);
    this.respostaExclusao = undefined;
    this.respostaAlteracao = undefined;

    if (!this.id || isNaN(idNum)) {
      alert('Por favor, informe um ID numérico válido.');
      return;
    }

    this.cadastroService.consultarCadastro(idNum).subscribe({
      next: (data) => {
        this.resultado = data;
        this.formAlteracao = { ...data };
      },
      error: (error) => {
        alert('Erro ao consultar cadastro: ' + error.message);
        this.resultado = undefined;
      }
    });
  }

  excluir() {
    const idNum = Number(this.id);
    if (!this.resultado || !idNum) return;

    this.cadastroService.excluirCadastro(idNum).subscribe({
      next: (res) => {
        this.respostaExclusao = res;
        this.resultado = undefined;
        this.respostaAlteracao = undefined;
      },
      error: (err) => {
        alert('Erro ao excluir cadastro: ' + err.message);
      }
    });
  }

  alterar() {
    const idNum = Number(this.id);
    if (!this.resultado || !idNum) return;

    this.cadastroService.alterarCadastro(idNum, this.formAlteracao).subscribe({
      next: (res) => {
        this.respostaAlteracao = res;
      },
      error: (err) => {
        alert('Erro ao alterar cadastro: ' + err.message);
      }
    });
  }
}

