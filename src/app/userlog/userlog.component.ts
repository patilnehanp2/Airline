import { Ilogin } from './../ilogin';
import { Component, OnInit } from '@angular/core';
import { RegistService } from '../regist.service';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.css']
})
export class UserlogComponent implements OnInit {
    userlogindata: Ilogin = {
      email: '', custPass: '',
      id: 0
    }
    constructor(private regist:RegistService,private router:Router) { }
  saveLogin(login:Ilogin){
    this.userlogindata=login
    this.regist.userlogin(this.userlogindata).subscribe(()=>
{
      alert("Login Successful!")
      this.router.navigate(['/home'])
    })
  }

  ngOnInit(): void {
  }

}
