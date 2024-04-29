import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,NgIf,NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}
  http=inject(HttpClient);
  res:any;
 error:any;

  login(email_user:any,password_user:any){
    
   this.http.post("http://localhost:5000/api/user/login",
   {email:email_user,password:password_user}).subscribe((res:any)=>{
      localStorage.setItem("token",res.token)
        this.res=res})
    if (localStorage.getItem("token")&& localStorage.getItem("token")) {
      this.router.navigate(['/']);
      console.log('object');
    }
    else {
      this.error='bad credential'
    }}
}
