import { Routes } from '@angular/router';
import { Home } from './components/home';
import { ProdutosComponent } from './components/produtos';
import { DetalheProdutoComponent } from './components/detalhe-produto';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produto/:id', component: DetalheProdutoComponent }
];