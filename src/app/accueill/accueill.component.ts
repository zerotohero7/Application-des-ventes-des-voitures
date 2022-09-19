import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accueill',
  templateUrl: './accueill.component.html',
  styleUrls: ['./accueill.component.css']
})
export class AccueillComponent implements OnInit {

  constructor(private serviceData : DataService ) { }

  ngOnInit(): void {
    this.getData()
  }

  data : any = []

  getData(){
    this.serviceData.getProducts().subscribe(mydata=>
      this.data = mydata
      )
  }



}
