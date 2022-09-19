import { Injectable } from '@angular/core';
/* Importing the httpClient module from the angular common http library. */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http : HttpClient) { }

  tableau : any = []

  getting(product : any){
    console.log(product);
    this.tableau.push(product)

  }


    postProducts(data : any):Observable<any>{
     return   this._http.post<any>('http://localhost:3000/products',data)
    }

    getProducts(){
      return this._http.get<any>('http://localhost:3000/products')
    }

    deleteData(id:number){
      return this._http.delete<any>('http://localhost:3000/products' + '/' + id)
    }

}
