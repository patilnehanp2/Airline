import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersignupService } from '../usersignup.service';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Usersignup } from '../usersignup';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _service :UsersignupService, private activeroute:ActivatedRoute,private router:Router) { }
  faEyeSlash = faEyeSlash;
  faEye=faEye;
  //password toggle
  visible = false;
  public response:string ;
  public timer : boolean;
  customer:Usersignup;

  ngOnInit(): void {
  }
  onClick()
  {
    this.visible = !this.visible;
  }
  onSubmit(myform:NgForm)
  {
    this.customer=myform.value;
    this._service.RegisterUser(this.customer).subscribe(data=>{
      console.log(this.customer)
alert("Registered Success")
    }

      )

  }
}
