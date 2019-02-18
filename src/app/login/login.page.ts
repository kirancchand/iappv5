import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  username: string = ""
  password: string = ""
  constructor(private ls: LoginService,private router: Router) { }

  ngOnInit() {
  }

  async login()
  {
   const {username,password} = this
	   try
	   {
	   	  const result=this.ls.loginCheck(username,password);
	   	  console.dir(result);

	   }
	   catch(err)
	   {

	   console.dir(err);

	   }
  }

}
