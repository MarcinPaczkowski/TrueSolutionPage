import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'True solution';

  constructor(translate: TranslateService) {
    translate.addLangs(['pl', 'en']);
    translate.reloadLang('en');
    translate.reloadLang('pl');


    translate.setDefaultLang('pl');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|pl/) ? browserLang : 'pl');
  }

  ngOnInit() {
    AOS.init();
  }
}

