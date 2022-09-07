import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private authService: AuthService, private route: Router) { }

  loginForm: FormGroup;
  email: string;
  pwd: string
  postSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value); 
    }
    if(this.loginForm.valid){
      this.authService.login(this.email,this.pwd).subscribe(res=>{
        console.log(res);
        this.route.navigate(['admin']);
      },
      err=>{
        alert('Wrong ID & PassWord');
      })
    }
  }
  routeChange(){
    this.route.navigate(['forget-password']);
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email' : new FormControl(''),
      'pwd' : new FormControl('')
    })
    if(this.authService.isLogin()){
      this.route.navigate(['admin']);
    }
  }

}
