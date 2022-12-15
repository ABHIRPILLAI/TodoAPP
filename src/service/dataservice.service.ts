import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }
  currentUser="";///for display current username name in dashboard
  currentphno="";
  userDetail:any=
  {
   909090900:{username:'Abhi',phno:909090900,password:1000,todo:[]},
   9090909000:{username:'Abhilash',phno:9090909000,password:1001,todo:[]},
   909090900000:{username:'Abhilash Radhakarishna Pillai',phno:909090900000,password:1002,todo:[]}
  }

  saveDetails(){
    if(this.userDetail){
      localStorage.setItem('database',JSON.stringify(this.userDetail))
    }
    if(this.currentphno){
      localStorage.setItem('CurrentPhno',JSON.stringify(this.currentphno))
    }
    if(this.currentUser){
      localStorage.setItem('CurrentUser',JSON.stringify(this.currentUser))
    }
 
    
  }
  getDetails(){
    if(this.userDetail){
      this.userDetail=JSON.parse(localStorage.getItem('database')||'')
    }
    if(this.currentphno){
      this.currentphno=JSON.parse(localStorage.getItem('CurrentPhno')||'')
    }
    if(this.currentUser){
      this.currentUser=JSON.parse(localStorage.getItem('CurrentUser')||'')
    }
  }
  login(phno:any,pswdd:any){

    let userDetails=this.userDetail

    if (phno in userDetails) {

      if(pswdd==userDetails[phno]['password'] ){
        this.currentUser=userDetails[phno]['username']//assign username to the variable
        this.currentphno=userDetails[phno]['phno']

        this.saveDetails();
        return true;

      }
      
     else {
      return false;
      
    }
  }
    else{
      return false;
    }

   }
   register(uname:any,phno:any,password:any,){

    let userDetails=this.userDetail

    if(phno in userDetails){
      return false;
    }
    else{
      userDetails[phno]={
        username:uname,
        // username:username,
        phno:phno,
        password:password,
        todo:[]//also here
      }
      console.log(userDetails);
      this.saveDetails();
      
      return true;
    }

   }
   subtodo(phno:any,todo1:any,desc1:any)
  {
    let userDetails=this.userDetail
    // var amount=parseInt(amt)
        // userDetails[phno]['balance']+=amount;
        var todo=todo1 ;
        var desc = desc1
        if (phno in userDetails) {
          userDetails[phno]['todo'].push({//push values to transaction array
            Todo:todo,
            Description:desc//the Type name and amount name is refered in *ngFor
          })
          

        }

        else{
          alert('invalid fon number')
          return false;
        }
        console.log(userDetails);//to check whether the data is disolaying
        this.saveDetails();
        return userDetails[phno]['todo']

      
    
  }
    gettodo(phno:any){//acno arde ano ayalde acnt details kitnm

    return  this.userDetail[phno]['todo']
  
    }
}
