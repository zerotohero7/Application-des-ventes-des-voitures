import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route : Router , private DataService : DataService) { }

  ngOnInit(): void {

  }

  data : any = JSON.parse(localStorage.getItem('products')!)


  modifier(id : number){
    this.route.navigate(['/addArticle' , id])
  }

  delete(x : any){
   this.data.splice(x,1)
   localStorage.setItem('products',JSON.stringify(this.data))
  }

  addArticle(){
    this.route.navigate(['/addArticle'])
  }



}
