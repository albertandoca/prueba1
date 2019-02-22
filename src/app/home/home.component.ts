import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mensajeSaludo: String;
  mostrar: boolean;
  nombre: String;
  verificar: boolean;
  valorBoton: String;

  constructor() { }

  ngOnInit() {
    this.mostrar = true;
    this.nombre = 'Carlos';
    this.verificar = true;
    this.valorBoton = 'ocultar bloque';

    setInterval(() => {
      this.verifica();
    }, 5000);
    
  }

  saludo(saludo: String) {
    alert(saludo);
    this.bye();
  }

  bye() {
    console.log('Te fuiste muy pronto');
  }

  contar() {
    let numeros = [];
    for (let i = 0; i < 10000; i++){
      numeros.push(i);
    };
    
    console.log(numeros);
    this.saludo('hola')

  }

  ver() {
    this.mostrar = this.mostrar == true ? false : true;
    
  }

  verifica() {
    this.verificar = this.verificar ? false : true;
    this.valorBoton = this.verificar ? 'ocultar bloque' : 'ver bloque';
    console.log(this.valorBoton);
  }

}
