import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  constructor(private http: HttpClient) {}

  getUsers(searchKey: string) {
    let url = 'https://aravindtwitter.herokuapp.com/twittersearch' + searchKey;
    return this.http.get(url);
  }
}
