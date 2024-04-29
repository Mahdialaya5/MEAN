import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-addstudent',
  standalone: true,
  imports: [RouterLink,NavbarComponent],
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent implements OnInit {
  http=inject(HttpClient);
  res:any=[];
 data:any
 token:any
 ngOnInit():void {
    this.getguilds()
 }

getguilds(){
     this.http.get("http://localhost:5000/api/guild").subscribe((data:any)=>{
       console.log(data)
     this.data=data})
  }

add(newemail:String,newname:String,newphone:any,inguild:any,newformation:any){
  this.token=localStorage.getItem('token')
    this.http.post("http://localhost:5000/api/student",
   {email:newemail,name: newname,phone: newphone,formation: newformation,guild:inguild},
   { headers:{ Authorization: `Bearer ${this.token}`}}).subscribe(
    (res:any)=>{
    console.log(res)
  this.res=res})
 }

}
