import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PRODUTOS } from '../data/produtos';

@Component({
  selector: 'app-detalhe-produto',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div *ngIf="produto" class="card">
    <h2>{{ produto.nome }}</h2>

    <p><strong>ID:</strong> {{ produto.id }}</p>

    <hr>

    <p>{{ produto.descricao }}</p>

    <br>

    <a routerLink="/produtos">⬅ Voltar</a>
  </div>
`
})
export class DetalheProdutoComponent {

  produto: any;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = PRODUTOS.find(p => p.id === id);
  }
}