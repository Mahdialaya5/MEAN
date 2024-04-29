import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-guildlist',
  standalone: true,
  imports: [RouterLink,NavbarComponent],
  templateUrl: './guildlist.component.html',
  styleUrl: './guildlist.component.css'
})
export class GuildlistComponent  implements OnInit {

  http=inject(HttpClient);
  data:any=[];
   //token:any=localStorage.getItem("token")

  ngOnInit():void {
     this.getguilds()
  }

   getguilds(){
      this.http.get("http://localhost:5000/api/guild").subscribe((data:any)=>{
        console.log(data)
      this.data=data})
   }
}
