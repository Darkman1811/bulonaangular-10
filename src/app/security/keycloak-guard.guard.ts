import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class KeycloakGuardGuard extends KeycloakAuthGuard {

  constructor(
    protected readonly router: Router,
    protected readonly keycloak: KeycloakService
  ) {
    super(router, keycloak);
  }

  // @ts-ignore
  public async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Force the user to log in if currently unauthenticated.
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
    }


    // Get the roles required from the route.
    const requiredRoles = route.data.roles;
/*
     //Printing actual user roles
    for(var i=0;i<this.roles.length;i++){
        localStorage.setItem("actual"+i,this.roles[i]);
    }

    //printing required user roles
    for(var i=0;i<requiredRoles.length;i++){
      localStorage.setItem("required"+i,requiredRoles[i]);
  }
*/
    // Allow the user to to proceed if no additional roles are required to access the route.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    // Allow the user to proceed if all the required roles are present.
    return requiredRoles.every((role) => this.roles.includes(role));
  }
}
