import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private route : Router) { }

  tableau : any = []

  getting(product : any){
    console.log(product);
    this.tableau.push(product)
  }



  logging : any  = true;





}

