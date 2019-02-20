import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carlos';
  ciudad = 'Guayaquil';
  n1 = 5;
  n2 = 8;
  res = this.n1 + this.n2;
  msg = `Mi nombre es ${this.title} y soy de ${this.ciudad}, tengo ${this.res} años`;
  msgAntiguo = 'Hola "con comillas"' + this.title;
}
ghfjhgfjhgfjfjghf
