import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  identite : any ;
  create = true ;
  modify = false ;
  constructor(private fb : FormBuilder , private getService : DataService , private activeRue : ActivatedRoute) {

    this.identite  = Number( this.activeRue.snapshot.paramMap.get('id')) -1


    if (this.activeRue.snapshot.paramMap.get('id') === null ) {
      this.create = true ;
      this.modify = false ;
    }else {
      this.create = false ;
      this.modify = true ;
      this.infosProducts.get('name').value = JSON.parse(localStorage.getItem('products')!)[this.identite].name
      this.infosProducts.get('price').value = JSON.parse(localStorage.getItem('products')!)[this.identite].price
      this.infosProducts.get('quantity').value= JSON.parse(localStorage.getItem('products')!)[this.identite].quantity
       this.infosProducts.get('description').value= JSON.parse(localStorage.getItem('products')!)[this.identite].description
       this.infosProducts.get('category').value= JSON.parse(localStorage.getItem('products')!)[this.identite].category
    }
  }


  update(){
    let table : any =JSON.parse(localStorage.getItem('products')!) || [] ;
    let name = this.infosProducts.get('name').value
    let price = this.infosProducts.get('price').value
    let quantity = this.infosProducts.get('quantity').value
    let description = this.infosProducts.get('description').value
    let category = this.infosProducts.get('category').value

    table.splice(this.identite,1,{'name':name , 'price' : price , 'quantity' : quantity , 'description' : description , 'category' : category})
    localStorage.setItem('products' , JSON.stringify(table))

  }


  ngOnInit(): void {

  }

  infosProducts :any = this.fb.group({
    name : ['' , Validators.required],
    price : ['' , Validators.required],
    quantity : ['' ,  Validators.required],
    description : ['' ,Validators.required],
    category : ['' ,  Validators.required]
  })


  public get name()  {
    return this.infosProducts.get('name')
  }
  public get price()  {
    return this.infosProducts.get('price')
  }
  public get quantity() {
    return this.infosProducts.get('quantity')
  }
  public get description() {
    return this.infosProducts.get('description')
  }
  public get category() {
    return this.infosProducts.get('category')
  }


  getData(){
    let table : any =JSON.parse(localStorage.getItem('products')!) || [] ;
  let name = this.infosProducts.get('name').value
  let price = this.infosProducts.get('price').value
  let quantity = this.infosProducts.get('quantity').value
  let description = this.infosProducts.get('description').value
  let category = this.infosProducts.get('category').value



  table.push({'name':name , 'price' : price , 'quantity' : quantity , 'description' : description , 'category' : category})
    localStorage.setItem('products' , JSON.stringify(table))
  }








}
