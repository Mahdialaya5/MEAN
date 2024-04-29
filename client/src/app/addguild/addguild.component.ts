import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-addguild',
  standalone: true,
  imports: [RouterLink,NavbarComponent],
  templateUrl: './addguild.component.html',
  styleUrl: './addguild.component.css'
})
export class AddguildComponent implements OnInit {
  http=inject(HttpClient);
  res:any=[];
  users:any=[]
 token:any
  
  ngOnInit():void {
    this.geusers()
 }

 geusers(){
  this.token=localStorage.getItem('token')
  this.http.get("http://localhost:5000/api/user/userlist",
  { headers:{ Authorization: `Bearer ${this.token}`}}
  ).subscribe((data:any)=>{
    console.log(data)
  this.users=data})
 }

add(newname:String,newformation:String,withInstuctor:String){
  this.token=localStorage.getItem('token')
  this.http.post("http://localhost:5000/api/guild",
  {name: newname,formation: newformation,instructor:withInstuctor},
  { headers:{ Authorization: `Bearer ${this.token}`}}).subscribe(
    (res:any)=>{
    console.log(res)
  this.res=res})

 }
}
