import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router) { }

  setToken(token:string){
    localStorage.setItem('token',token)
  }
  getToken(){
    return localStorage.getItem('token')
  }

  isLogin(){
    return this.getToken()!=null;
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['/login'])
  }

  login(email,password): Observable<any> {
    if(email === 'admin@admin.com' && password === 'admin@123'){
      console.log('Service Runs');
      console.log(this.isLogin);
      this.setToken('zxcvbnmasdfghjkl123456789');
      return of({name:'Hrishikesh Barange', email:'hrishikesh@developer11.com'});
    }
    return throwError(new Error('Failed to Login, Check Your ID & Password'));
  }



}
