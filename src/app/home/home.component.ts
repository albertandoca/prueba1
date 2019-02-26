import { Component, OnInit, ViewChildren, ViewContainerRef, ViewChild } from '@angular/core';
import { Persona } from '../modelos/persona';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  verificar1: boolean;
  valorBoton: String;
  @ViewChild('template1') template1;
  @ViewChild('template2') template2;
  personas: Persona[];
  estudianteSeleccionado: number;
  imagenes: String[];
  menus: String[];
  menuHorizontal: String[];
  menuVertical: String[];


  color: String;
  inicio: number;
  fin: number;


  constructor(private modalService: NgbModal) {

   }

  ngOnInit() {
    this.mostrar = true;
    this.nombre = 'Marcia';
    this.verificar = true;
    this.verificar = false;
    this.valorBoton = 'ocultar bloque';
    this.color = 'white';
    this.estudianteSeleccionado = 5;
    this.imagenes = [ '../../assets/img/persona.png',
                      '../../assets/img/persona.png',
                      '../../assets/img/persona.png',
                      '../../assets/img/persona.png',
                      '../../assets/img/persona.png',
                      '../../assets/img/persona.png',
                      '../../assets/img/persona.png',
                      '../../assets/img/persona.png',
                      '../../assets/img/persona.png',
                      '../../assets/img/persona.png'
    ];
    this.menus = ['home', 'galería', 'noticias', 'contacto', 'internacional',
    'nacional', 'noticias', 'contacto', 'internacional', 'nacional'];
    this.menuHorizontal = [];
    this.menuVertical = [];
this.menus.forEach((element, index) => {
  console.log(index);
  /* if (index < 6) {
    this.menuHorizontal.push(element);
    console.log(this.menuHorizontal);
  } else {
    this.menuVertical.push(element);
  } */
  index < 4 ? this.menuHorizontal.push(element) : this.menuVertical.push(element);
});

    this.personas = [
      {
        id: 1,
        nombre: 'Gabriela',
        apellido: 'Romero',
        urlFoto: '../../assets/img/persona.png',
        edad: 24
      },
      {
        id: 2,
        nombre: 'Ana',
        apellido: 'Romero',
        urlFoto: '../../assets/img/persona.png',
        edad: 26
      },
      {
        id: 3,
        nombre: 'José',
        apellido: 'Romero',
        urlFoto: '../../assets/img/persona.png',
        edad: 33
      },
      {
        id: 4,
        nombre: 'Roberto',
        apellido: 'Perez',
        urlFoto: '../../assets/img/persona.png',
        edad: 55
      },
      {
        id: 5,
        nombre: 'Marcia',
        apellido: 'Andrade',
        urlFoto: '../../assets/img/persona.png',
        edad: 27
      },
      {
        id: 6,
        nombre: 'Gaby',
        apellido: 'Romero',
        urlFoto: '../../assets/img/persona.png',
        edad: 14
      },
      {
        id: 7,
        nombre: 'Rita',
        apellido: 'Alaba',
        urlFoto: '../../assets/img/persona.png',
        edad: 44
      },
      {
        id: 8,
        nombre: 'marcelo',
        apellido: 'Burbano',
        urlFoto: '../../assets/img/persona.png',
        edad: 28
      },
    ];




    console.log(this.personas[1].nombre);


    this.inicio = 0;
    this.fin = this.personas.length - 1;
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
    for (let i = 0; i < 10000; i++) {
      numeros.push(i);
    }

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

  cambiarNombre() {
    this.personas[this.estudianteSeleccionado].nombre = 'nombre Cambiado';
  }


  openModal(contenedor) {
    this.modalService.open(contenedor);
  }


  close(dato: String) {
    alert('desde el close');
  }

}
