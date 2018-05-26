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
  operacao: string;

  constructor() {
    this.conjuntos = [];
    this.selecionado = null;
    this.nomes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
  }

  novoConjunto() {
    const conjunto = new ConjuntoComponent(this.getProximoNomeDoConjunto());
    this.conjuntos.push(conjunto);
    this.selecionado = conjunto;
    this.unselectAll();
    conjunto.selecionado = true;
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

  getElemento (nome: string) {
    let retorno = null;
    this.conjuntos.forEach(function (conjunto) {
      if (conjunto.nome === nome) {
        retorno = conjunto.getElementos();
      }
    });
    return retorno;
  }

  addElemento (elemento: string) {
    if  (elemento.charAt(0) === '#') {
      const cj = elemento.substring(1);
      elemento = this.getElemento(cj);
    }
    if (elemento != null) {
      this.selecionado.addElemento(elemento);
    }
  }

  setOperacao (op: string) {
    this.operacao = op;
  }



}
