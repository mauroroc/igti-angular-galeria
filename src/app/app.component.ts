import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'galeria';
  nome: string = 'Quadros de Escher';
  fotos: string[] = ['assets/foto1.JPG', 'assets/foto2.JPG', 'assets/foto3.JPG', 'assets/foto4.JPG', 'assets/foto5.JPG' ];
  nome2: string = 'Vazia';
  fotos2: string[] = [];
}
