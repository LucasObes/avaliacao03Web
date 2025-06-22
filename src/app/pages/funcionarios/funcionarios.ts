import { Component, OnInit } from '@angular/core';
import { Funcionario, FuncionarioService } from '../../services/funcionario';

@Component({
  selector: 'app-funcionarios',
  standalone: false,
  templateUrl: './funcionarios.html',
  styleUrl: './funcionarios.css'
})

export class FuncionariosPage implements OnInit {
  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
      this.funcionarioService.getFuncionarios().subscribe({
        next: (data: Funcionario[]) => {
          this.funcionarios = data;
        },
        error: (error) => {
          console.error('Erro ao carregar funcionarios: ', error);
        }
      })
  }
}
