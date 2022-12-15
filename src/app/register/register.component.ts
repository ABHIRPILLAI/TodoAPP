import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/service/dataservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname="";
  pswd="";
  phno="";
  registerForm=this.fb.group({//group
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],//array
    phno:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],

    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })
  constructor(private router:Router, private ds: DataserviceService ,private fb:FormBuilder) { }
 
  ngOnInit(): void {
  }
  register()
  {
    console.log(this.registerForm);
    

    // alert('')

    var username=this.registerForm.value.uname;
    var phno=this.registerForm.value.phno;

    var password=this.registerForm.value.pswd;

    if(this.registerForm.valid)
    {
      console.log(this.registerForm.get('uname')?.errors);
      
    const result=this.ds.register(username,phno,password);
    if(result)
    {
    alert('Register Successful');
    this.router.navigateByUrl('')
    }
    else{
      alert('Register Failed');
      this.router.navigateByUrl('register')
    }
    }else{
      alert('invalid form')
    }









  }
}
