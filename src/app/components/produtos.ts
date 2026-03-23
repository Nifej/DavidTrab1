import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PRODUTOS } from '../data/produtos';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <div class="card">
    <h2>Lista de Produtos</h2>

    <table>
      <tr>
        <th>ID</th>
        <th>Nome</th>
      </tr>

      <tr *ngFor="let produto of produtos">
        <td>
          <a [routerLink]="['/produto', produto.id]">
            {{ produto.id }}
          </a>
        </td>
        <td>
          <a [routerLink]="['/produto', produto.id]">
            {{ produto.nome }}
          </a>
        </td>
      </tr>
    </table>
  </div>
`
})
export class ProdutosComponent {
  produtos = PRODUTOS;
}