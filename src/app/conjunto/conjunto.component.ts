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

  constructor(nome: string) {
    this.nome = nome;
    this.elementos = [];
    console.log('criado com sucesso: ' + this.nome);
  }

  ngOnInit() {

  }

  getTamElementos() {
    return this.elementos.length;
  }

  addElemento(elemento: String) {
    this.elementos.push(elemento);
  }

}
