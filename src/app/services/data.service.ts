import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  tableau : any = []

  getting(product : any){
    console.log(product);
    this.tableau.push(product)

  }
}
