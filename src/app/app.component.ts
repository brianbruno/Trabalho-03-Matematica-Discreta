import { Component } from '@angular/core';
import {ConjuntoComponent} from './conjunto/conjunto.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Teoria dos Conjuntos';
  conjuntos: ConjuntoComponent[];
  selecionado: ConjuntoComponent;
  nomes: string[];
  elemento = '';

  constructor() {
    this.conjuntos = [];
    this.selecionado = null;
    this.nomes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  }

  novoConjunto() {
    this.conjuntos.push(new ConjuntoComponent(this.getProximoNomeDoConjunto()));
  }

  getProximoNomeDoConjunto() {
    const numeroConjuntos = this.conjuntos.length;
    return this.nomes[numeroConjuntos];
  }

  clickConjunto(nome: String) {
    this.unselectAll();
    const conjunto = this.getConjunto(nome);
    conjunto.selecionado = true;
    this.selecionado = conjunto;
    console.log('Conjunto: ' + conjunto.nome);
  }

  getConjunto(nome: String) {
    let objConjunto = null;
    this.conjuntos.forEach(function (conjunto) {
      if (conjunto.nome === nome) {
        objConjunto = conjunto;
      }
    });
    return objConjunto;
  }

  unselectAll () {
    this.conjuntos.forEach(function (conjunto) {
      conjunto.selecionado = false;
    });
  }



}
