import { Component , OnInit} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor (
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.http.get<UserResponse>('https://api.github.com/users/seeschweiler?timestamp=' + Date.now()).subscribe(
      data => {
        console.log('User Login: ' + data.login);
      }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
         console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      }
    );
    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'DucNGUYEN : ' + Date.now(),
      body: 'bar',
      userId: 101
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
  }
}



interface UserResponse {
  login: string;
  bio: string;
  company: string;
}
