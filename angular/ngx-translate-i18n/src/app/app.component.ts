import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lang = 'vi';
  translate;
  constructor(
    translate: TranslateService
  ) {
    translate.use('vi');
    this.translate =  translate;
  }

  onLangChange(data) {
    this.translate.use(data);
  }
}
