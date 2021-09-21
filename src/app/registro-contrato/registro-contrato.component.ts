import { Component, OnInit } from '@angular/core';
import { Contratosuministros } from '../contratos/models/contratosuministros';

@Component({
  selector: 'app-registro-contrato',
  templateUrl: '/registro-contrato.component.html',
  styleUrls: ['./registro-contrato.component.css']
})
export class RegistroContratoComponent implements OnInit {
  contratosuministro!: Contratosuministros;
  constructor() { }

  ngOnInit(): void {
    this.contratosuministro = new Contratosuministros();
  }

  add() { }
}
