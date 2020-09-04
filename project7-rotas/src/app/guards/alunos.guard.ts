import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {

        // console.log(route);
        // console.log(state);

        console.log('AlunosGuard: Guarda de rota filha');

        if(state.url.includes('editar')){
            // alert('Usuário sem acesso');
            // return of(false);
        }

        return true;
    }

}