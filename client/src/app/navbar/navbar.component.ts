

import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, inject } from '@angular/core';
import { RouterLink,Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}
  http=inject(HttpClient);
 token:any='';
  ngOnInit():void {
    this.getcurrent()
 }
  getcurrent(){
   this.token=localStorage.getItem('token')
     this.http.get("http://localhost:5000/api/user/current",{ headers: { Authorization: `Bearer ${this.token}` }}).subscribe((data:any)=>{
       console.log(data)
    })
  }  

   logot(){
    localStorage.removeItem('token')
    this.router.navigate(['/']);
   }
}


