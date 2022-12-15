import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/service/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  user="";                  
  constructor(private router:Router , private ds:DataserviceService , private fb:FormBuilder ) {
    this.user=this.ds.currentUser

   }

  ngOnInit(): void {
    if(!localStorage.getItem('CurrentPhno'))
    {
      alert('Please Login')
      this.router.navigateByUrl("register");
    }

  }
  logout(){
    //remove username and acno
  
    localStorage.removeItem('CurrentPhno')
    this.router.navigateByUrl('')
  }

  
}
