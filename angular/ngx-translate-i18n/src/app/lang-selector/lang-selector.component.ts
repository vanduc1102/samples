import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent implements OnInit {
  @Input() lang: string;

  @Output()
  langChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(translate: TranslateService) {

  }

  ngOnInit() {
    console.log('onInit : ', this.lang);
  }

  onChange(newLangCode) {
    this.lang = newLangCode;
    this.langChange.emit(newLangCode);
    console.log(newLangCode);
  }

}
