import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subscriber} from './types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {
  }

  getSubscribers$() {
    return this.http.get<Subscriber[]>(`${this.baseUrl}/subscribers`);
  }

}
