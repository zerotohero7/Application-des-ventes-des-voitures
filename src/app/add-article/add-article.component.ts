import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  constructor(private fb : FormBuilder , private getService : DataService) { }

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

    localStorage.setItem('products' , JSON.stringify(table)  )

  }
}
