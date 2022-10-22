import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DailybookService {

  constructor(private http:HttpClient) { }

  getAllParticulars() {
    return this.http.get(`${environment.baseUrl}/particulars`);
  }

  getAllDailyBooks() {
    return this.http.get(`${environment.baseUrl}/dailyBooks`);
  }

  createDailyBook(dailyBookData:any) {
    return this.http.post(`${environment.baseUrl}/dailyBook`, dailyBookData);
  }

  getAllUsersList() {
    return this.http.get(`${environment.baseUrl}/userDetails`);
  }

  getUsersForParticular(particularId:string) {
    return this.http.get(`${environment.baseUrl}/userDetails/${particularId}`)
  }
}
