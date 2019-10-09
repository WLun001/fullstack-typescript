import {Component} from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'fullstack-example';
  subscribers$ = this.apiService.getSubscribers$();

  constructor(private apiService: ApiService) {

  }
}
