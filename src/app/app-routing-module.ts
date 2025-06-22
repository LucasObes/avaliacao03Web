import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { FuncionariosPage } from './pages/funcionarios/funcionarios';
import { CadastroPage } from './pages/cadastro/cadastro';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'funcionarios', component: FuncionariosPage },
  { path: 'cadastro', component: CadastroPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
