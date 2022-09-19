import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route : Router , private serviceData : DataService) { }

  ngOnInit(): void {
      this.getTable()
  }

  data : any = []

  getTable(){
    this.serviceData.getProducts().subscribe(mydata=>{
        this.data = mydata
    })
  }

  deleteProduct(id:any){
    this.serviceData.deleteData(id).subscribe((response)=>
      {this.ngOnInit()}
      )
  }

  modifier(id:any ){
    this.serviceData.deleteData(id).subscribe((response)=>
    {this.ngOnInit()}
    )
    this.route.navigate(['/addArticle'])
  }


  addArticle(){
    this.route.navigate(['/addArticle'])
  }



}
