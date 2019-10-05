import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _serviceController: AngularFireAuth
  ) { }

  public async singIn(email:string,password:string){
    let data: any = {};
    await this._serviceController.auth.signInWithEmailAndPassword(email,password).then(
      response => {
        console.log(response)
        return data = response;
      }
    ).catch(
      error => {
        console.log(error)
        return data = error;
      }
    );

    return data;
  }

  public async createUser(email:string,password:string){
    let data: any;
    await this._serviceController.auth.createUserWithEmailAndPassword(email,password).then(
      response => {
        console.log(response)
        return data = response;
      }
    ).catch(error => {
      console.log(error)
      return data = error;
    })

    return data;
    
    
  }
}
