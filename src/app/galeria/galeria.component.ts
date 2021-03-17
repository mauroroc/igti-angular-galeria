import { Component, Input, OnInit } from '@angular/core';
import { formatWithOptions } from 'util';

@Component({
  selector: 'galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

@Input() titulo: string;
@Input() fotos: string[];
posicao: number = 0;
tamanho: number = 0;

ngOnInit() {
  this.tamanho = this.fotos.length;
}

mudaPosicao(pos:number) {
  this.posicao = pos;  
}

}
