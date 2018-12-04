import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService} from '../../app-service/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  click_1 = true;
  showProgress = false;
  constructor (
    private userService: UserService,
    private router: Router
  ) {
    // console.log(Md5.hashStr('admin'));
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      keepLoggedin: new FormControl(false)
    });
  }

  login() {
    if ( !this.click_1 ) {
      return;
    }
    this.click_1 = false;

    if (this.loginForm.value.username === '') {
      this.click_1 = true;
      return;
    }
    if (this.loginForm.value.password === '') {
      this.click_1 = true;
      return;
    }

    const dataForm = {
      account: this.loginForm.value.username,
      pwd: 'b30da0a0e48ff2de1b06af3049e1822e5051c1184f47c581184075eb20dc9f3a',
      keep_logged_in: this.loginForm.value.keepLoggedin
    };

    // console.log(crypto.createHash('md5').update('abc').digest('hex'));
    this.showProgress = true;
    this.userService.login(dataForm).subscribe(res => {
      console.log(res);
      this.showProgress = false;
      this.router.navigate(['activities']);
    });
  }

}
