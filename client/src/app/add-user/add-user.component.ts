import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [RouterLink,NavbarComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  http=inject(HttpClient);
  res:any=[];
  token:any
add(newemail:String,newname:String,newpassword:String){
  this.token=localStorage.getItem('token')
  this.http.post("http://localhost:5000/api/user/register",
  {email:newemail,name:newname,password:newpassword},{ headers:{ Authorization: `Bearer ${this.token}`}}).subscribe(
    (res:any)=>{
    console.log(res)
  this.res=res})
 }
}
