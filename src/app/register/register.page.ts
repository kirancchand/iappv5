import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

	  username: string = ""
    password: string = ""
    cpassword: string = ""

    constructor(private rs: RegisterService,private router: Router) { }

    ngOnInit() {
   }

   async register()
  {
   const {username,password,cpassword} = this
	   try
	   {
	   	  const result=this.rs.registerUser(username,password,cpassword);
	   	  console.dir(result);

	   }
	   catch(err)
	   {
	   console.dir(err);
	   }
  }

}
