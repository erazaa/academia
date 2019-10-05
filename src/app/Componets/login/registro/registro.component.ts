import { LoginService } from './../../../Services/login.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss', '../login.component.scss']
})
export class RegistroComponent implements OnInit {
  registerForm: FormGroup;
  showAlert: boolean = false;
  messagge: string = "Ha ocurrido un error de conexión."

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private LoginService: LoginService
  ) { 
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  public async registro(){
    const user = this.registerForm.controls.email.value;
    const pass = this.registerForm.controls.password.value;
    await this.LoginService.createUser(user, pass)
  }

}
