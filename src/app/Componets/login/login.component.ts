import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  showAlert: boolean = false;
  messagge: string = "Ha ocurrido un error de conexión."

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private loginService: LoginService
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  async singIng(user:string,password:string){
      await this.loginService.singIn(user,password).then(
        response => {
          if(response.code){
            this.showAlert = true;
            this.messagge = response.message;
          }else{
            console.log('inicio sesion')
          }
        }
      )
  }

  async onSubmit(){
    console.log('clicked')
    const user = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    console.log(this.loginForm);
    await this.loginForm.valid ? 
      await this.singIng(user,password) : console.log("ha ocurrido un error.")
  }

  public goToRegister(){
    this.route.navigate(['/registro'])
  }
}
