import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line: no-inferrable-types
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if (usuario.nome === 'usuario@email.com' &&
      usuario.senha === '123456') {

        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);

        this.router.navigate(['/']);

      } else {
        this.usuarioAutenticado = false;

        this.mostrarMenuEmitter.emit(false);
      }

  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}