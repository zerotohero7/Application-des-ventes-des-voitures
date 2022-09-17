import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueill',
  templateUrl: './accueill.component.html',
  styleUrls: ['./accueill.component.css']
})
export class AccueillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data : any = JSON.parse(localStorage.getItem('products')!)




}
