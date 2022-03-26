import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appm-front';
  res:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.getApi();
  }

  getApi() {
     this.http.get('api/').subscribe(res=>this.res=res);
  }
}
