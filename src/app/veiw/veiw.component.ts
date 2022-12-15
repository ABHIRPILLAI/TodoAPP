import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/service/dataservice.service';

@Component({
  selector: 'app-veiw',
  templateUrl: './veiw.component.html',
  styleUrls: ['./veiw.component.css']
})
export class VeiwComponent implements OnInit {
phno:any
todo:any
btnVal="Submit";

  constructor(private ds:DataserviceService, private router:Router) { 
    this.phno=this.ds.currentphno;
    this.todo=this.ds.gettodo(this.phno)
    console.log(this.todo);
  }

  ngOnInit(): void {
  }
  submit()
  {
    alert("Completed");
    this.btnVal = "Completed"
    
  }
  home(){
    this.router.navigateByUrl('dashboard')
  }
}
