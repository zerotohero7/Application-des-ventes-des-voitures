import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private rue: Router, private fb: FormBuilder , private service : DataService) {
    localStorage.removeItem('token')
  }

  ngOnInit(): void {}

  // informationsLogin = new FormGroup({
  //   email : new FormControl('',Validators.required ),
  //   password : new FormControl('', [Validators.required , Validators.minLength(5)])
  // })

  informationsLogin: any = this.fb.group({
    email: ['', [Validators.required , Validators.pattern('[a-zA-Z0-9.]*[@][a-zA-Z0-9]*[.][a-zA-Z]*')]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  get mail() {
    return this.informationsLogin.get('email');
  }
  get motPasse() {
    return this.informationsLogin.get('password');
  }

  adresse: any;
  passe: any;

  localStorageTable = JSON.parse(localStorage.getItem('users')!);

  login() {
    let loginMotPasse = this.informationsLogin.get('password').value;
    let loginMail = this.informationsLogin.get('email').value;
    for (let i = 0; i < this.localStorageTable.length; i++) {
      let localMail = this.localStorageTable[i].email;
      let localPassword = this.localStorageTable[i].password;

      if (loginMail === localMail && loginMotPasse === localPassword) {
        this.rue.navigate(['/accueil']);
        alert('valider');
        localStorage.setItem('token', 'pass')
      } else {
        this.adresse = '';
        this.passe = '';
      }
    }

  }

}








































