import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dailybook',
  templateUrl: './dailybook.component.html',
  styleUrls: ['./dailybook.component.scss']
})
export class DailybookComponent implements OnInit {
  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
