import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder , private rue : Router  ) { }

  ngOnInit(): void {
  }

  // personnelsInformation = new FormGroup ({
  //   FirstName : new FormControl('',Validators.required),
  //   FamilyName : new FormControl('' , Validators.required),
  //   email : new FormControl('' , [Validators.required , Validators.pattern('@') ] ),
  //   password : new FormControl('' , [Validators.required , Validators.minLength(5)] ),
  //   confirmationPassword : new FormControl('' , [Validators.required , Validators.minLength(5)])
  // })


  personnelsInformation :any = this.fb.group({
    FirstName : ['',Validators.required],
    FamilyName : ['' , Validators.required],
    email : ['' , [Validators.email , Validators.required ]],
    password : ['' , [Validators.required , Validators.minLength(5)] ],
    confirmationPassword : ['' , [Validators.required , Validators.minLength(5)]]
  })




  register(){
  let dataUser : any =  JSON.parse(localStorage.getItem('users')!) || [] ;
    let prenom =  this.personnelsInformation.get('FirstName').value
    let nom =  this.personnelsInformation.get('FamilyName').value
    let mail =  this.personnelsInformation.get('email').value
    let motPasse =  this.personnelsInformation.get('password').value
    dataUser.push({'prenom':prenom, 'nom': nom , 'email' : mail , 'password': motPasse })
    localStorage.setItem('users',JSON.stringify(dataUser))
    this.rue.navigate(['/login'])
    alert('Congratulation you are registred')
  }



 get nom(){
  return this.personnelsInformation.get('FamilyName')
 }
 get mail (){
  return this.personnelsInformation.get('email')
 }
 get motPasse  (){
  return this.personnelsInformation.get('password')
 }

 get CmotPasse (){
  return this.personnelsInformation.get('confirmationPassword')
 }







}
