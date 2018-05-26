import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conjunto',
  templateUrl: './conjunto.component.html',
  styleUrls: ['./conjunto.component.css']
})

export class ConjuntoComponent implements OnInit {

  nome: String;
  selecionado: boolean;
  elementos: Object[];
  elementosConcat: string;

  constructor(nome: string) {
    this.nome = nome;
    this.elementos = [];
    this.elementosConcat = this.nome + ' = { }';
    console.log('criado com sucesso: ' + this.nome);
  }

  ngOnInit() {

  }

  getTamElementos() {
    return this.elementos.length;
  }

  addElemento(elemento: string) {
    this.elementos.push(elemento);
    this.setElementosConcat();
  }

  setElementosConcat() {
    this.elementosConcat = this.nome + ' = { ';
    const tam = this.elementos.length;
    for (let i = 0; i < tam; i++) {
      if (i + 1 === tam ) {
        this.elementosConcat += this.elementos[i] + ' }';
      } else {
        this.elementosConcat += this.elementos[i] + ', ';
      }
    }
  }

  getElementos () {
    let elementosString = '{ ';
    const tam = this.elementos.length;
    for (let i = 0; i < tam; i++) {
      if (i + 1 === tam ) {
        elementosString += this.elementos[i] + ' }';
      } else {
        elementosString += this.elementos[i] + ', ';
      }
    }
    return elementosString;
  }

  getElementosSemChave () {
    let elementosString = '';
    const tam = this.elementos.length;
    for (let i = 0; i < tam; i++) {
      if (i + 1 === tam ) {
        elementosString += ' ' + this.elementos[i];
      } else {
        elementosString += ' ' + this.elementos[i] + ',';
      }
    }
    return elementosString;
  }

  uniao (cj: ConjuntoComponent) {

    let novoVetor;

    novoVetor = this.jutarArraysExcluindoValoresRepetidos(this.elementos.concat(cj.elementos));
    novoVetor = novoVetor.sort();
    const resultado: string = novoVetor.join(', ');
    return 'Z = { ' + resultado + ' } - P(Z) = ' + novoVetor.length;
  }

  jutarArraysExcluindoValoresRepetidos(array) {
    const a = array.concat();
    for (let i = 0; i < a.length; ++i) {
      for (let j = i + 1; j < a.length; ++j) {
        if (a[i] === a[j]) {
          a.splice(j--, 1);
        }
      }
    }
    return a;
  }



}
