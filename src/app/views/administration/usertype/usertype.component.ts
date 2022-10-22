import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsertypeService } from 'src/app/service/usertype.service';


@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.component.html',
  styleUrls: ['./usertype.component.scss']
})
export class UsertypeComponent implements OnInit {
  userFormValidations = false;
  usertypes: any;
  responseData:any;
  constructor(private service:UsertypeService) { }

  ngOnInit(): void {
    this.getAllUserTypes();
  }

  getAllUserTypes() {
    this.service.getAllUserTypes().subscribe(item=> {
      this.usertypes = item;
    });
  }

  resetFields(userTypeData:any) {
    this.userFormValidations = false;
    userTypeData.resetForm();
  }

  createUserType(userTypeData:any) {
    this.userFormValidations = true;
    this.service.createUserType(userTypeData).subscribe(item=> {
      this.responseData = item;
      this.ngOnInit();
    });
  }
}
