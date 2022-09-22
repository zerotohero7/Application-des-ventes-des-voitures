import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAdminGuard implements CanActivate {
  constructor(private service : DataService , private route : Router){}
  canActivate(
  route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.service.logging()) {
        return true
      }else{
        this.route.navigate(['/login'])
        return false
      }
  }




}
