import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-studentlist',
  standalone: true,
  imports: [RouterLink,NavbarComponent],
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent implements OnInit  {
  
  http=inject(HttpClient);
  data:any=[];
 token:any
  ngOnInit():void {
     this.getStudent()
  }
   getStudent(){
    this.token=localStorage.getItem('token')
    this.http.get("http://localhost:5000/api/student",
    { headers:{ Authorization: `Bearer ${this.token}`}}
    ).subscribe((data:any)=>{
      console.log(data)
    this.data=data})
   }

}
