import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { LoginCredentials } from 'src/app/models/login-credentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated){
      this.router.navigate(['dashboard']);
    }

    this.loginForm = new FormGroup({
      username : new FormControl('', [Validators.required,]),
      password : new FormControl('', [Validators.required])
    });
  }

  public loginForm;
  public loginErrorMessage;

  onSubmit(){
    let credentials: LoginCredentials = {
      'username': '',
      'password': ''
    }

    credentials.username = this.loginForm.value.username;
    credentials.password = this.loginForm.value.password;

    this.authService.login(credentials).subscribe((response) => {
      if (response && response.token){
        this.loginErrorMessage = null;
        this.loginForm.value.username = "";
        this.loginForm.value.password = "";

        const token: string = response.token;
        // save the token in the local storage
        localStorage.setItem("merchant", token);
        // redirect to the dashboard
        this.router.navigate(['dashboard']);
      }
      
    },
    (error)=>{
      // login failed
      this.loginErrorMessage = "Beyond These Gates lie The Pure in Heart";
      this.loginForm.value.username = "";
      this.loginForm.value.password = "";
    });
  }

}
