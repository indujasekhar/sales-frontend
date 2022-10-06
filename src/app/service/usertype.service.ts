import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsertypeService {

  constructor(private http: HttpClient) { }

  getAllUserTypes() {
    return this.http.get(`${environment.baseUrl}/userType`);
  }

  createUserType(userTypeData:any) {
    return this.http.post(`${environment.baseUrl}/userType`, userTypeData);
  }
}
