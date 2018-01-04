import { Injectable } from '@angular/core';
import { IntroSocialMediaButton } from './intro.models';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class IntroService {

  constructor(private translateService: TranslateService) { }

  getDetails() {
    const language = this.translateService.currentLang.toUpperCase();
    const socialMediaButtons: IntroSocialMediaButton[] = [{
        icon: 'fa-user-circle',
        name: 'GoldenLine',
        url: 'http://www.goldenline.pl/marcin-paczkowski8/'
      },
      {
        icon: 'fa-linkedin',
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/marcin-paczkowski/'
      },
      {
        icon: 'fa-github',
        name: 'GitHub',
        url: 'https://github.com/MarcinPaczkowski/'
      },
      {
        icon: 'fa-file-pdf-o',
        name: 'CV',
        url: `../../../assets/files/Marcin Paczkowski CV (${language}).pdf`
      }];

    return socialMediaButtons;
  }
}
