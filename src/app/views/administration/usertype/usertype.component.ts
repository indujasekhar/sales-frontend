import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsertypeService } from 'src/app/service/usertype.service';


@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.component.html',
  styleUrls: ['./usertype.component.scss']
})
export class UsertypeComponent implements OnInit {
  usertypes: any;
  responseData:any;
  constructor(private service:UsertypeService) { }

  ngOnInit(): void {
    this.getAllUserTypes();
   // let response = this.http.get("http://localhost:8080/userType");
    //response.subscribe((data) => this.usertypes=data);
  }

  getAllUserTypes() {
    this.service.getAllUserTypes().subscribe(item=> {
      this.usertypes = item;
      console.log("UserTypeList"+this.usertypes);
    });
  }

  createUserType(userTypeData:any) {
    console.log("REQ USERType"+userTypeData);
    this.service.createUserType(userTypeData).subscribe(item=> {
      this.responseData = item;
      console.log(this.responseData);
    });
  }
}
