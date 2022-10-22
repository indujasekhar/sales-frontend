import { Component, OnInit } from '@angular/core';
import { DailybookService } from 'src/app/service/dailybook.service';

@Component({
  selector: 'app-dailybook',
  templateUrl: './dailybook.component.html',
  styleUrls: ['./dailybook.component.scss']
})
export class DailybookComponent implements OnInit {
  public date = new Date();
  particularList:any;
  dailyBookList:any;
  reponseData:any;
  userListForParticular:any;
  constructor(private service:DailybookService) { }

  ngOnInit(): void {
    this.getAllParticulars();
    this.getAllDailyBooks();
  }

  getAllParticulars() {
    this.service.getAllParticulars().subscribe(item=> {
      this.particularList = item;
    });
  }

  getAllUsersList() {
    this.service.getAllUsersList().subscribe(item=> {
      //map to the list
    });
  }

  getUsersForParticular(particularId:string) {
    this.service.getUsersForParticular(particularId).subscribe(item=> {
      this.userListForParticular = item;
    });
  }

  getAllDailyBooks() {
    this.service.getAllDailyBooks().subscribe(item=> {
      this.dailyBookList = item;
    });
  }

  createDailyBook(dailyBookData:any) {
    this.service.createDailyBook(dailyBookData).subscribe(item => {
      this.reponseData = item;
    });
    this.getAllDailyBooks();
  }

  onParticularChange(selParticular:string) {   
    if(selParticular == "1" || selParticular == "2") {
      this.getUsersForParticular(selParticular);
    }
  }

}
