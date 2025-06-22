import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { CadastroPage } from './pages/cadastro/cadastro';
import { FuncionariosPage } from './pages/funcionarios/funcionarios';
import { HomePage } from './pages/home/home';
import { provideHttpClient } from '@angular/common/http';
import { ConteudoHome } from './components/conteudo-home/conteudo-home';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    FuncionariosPage,
    HomePage,
    ConteudoHome,
    CadastroPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
