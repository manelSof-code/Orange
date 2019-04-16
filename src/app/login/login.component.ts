import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthentificationService} from '../service/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }
  ngOnInit() {
  }
  login() {
    this.router.navigate(['/Header']);
  }
  register(){
    this.router.navigate(['/register']);
  }

}
