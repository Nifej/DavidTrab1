import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="card">
      <h1>Bem-vindo 👋</h1>
      <p>
        Este sistema apresenta uma lista de produtos alimentícios com
        informações nutricionais detalhadas.
      </p>

      <p>
        Navegue até a aba <strong>Listagem</strong> para visualizar os produtos.
      </p>
    </div>
  `
})
export class Home {}