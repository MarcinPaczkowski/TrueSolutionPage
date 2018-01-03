import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { InfoBoxContent } from '../../commons/info-box/info-box.models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Injectable()
export class AboutService {

  constructor(private translateService: TranslateService) { }

  getDetails(): InfoBoxContent[] {
    let details: InfoBoxContent[] = [];
    Observable.combineLatest(this.translateService.get('ABOUT_firstAndLastNameTitle'),
      this.translateService.get('ABOUT_firstAndLastName'),
      this.translateService.get('ABOUT_ageTitle'),
      this.translateService.get('ABOUT_age'),
      this.translateService.get('ABOUT_localizationTitle'),
      this.translateService.get('ABOUT_localization'),
      this.translateService.get('ABOUT_positionTitle'),
      this.translateService.get('ABOUT_position'),
      this.translateService.get('ABOUT_educationTitle'),
      this.translateService.get('ABOUT_education'),
      this.translateService.get('ABOUT_emailTitle'),
      this.translateService.get('ABOUT_email')).subscribe(translations => {
        details = [{
          title: translations[0],
          content: translations[1],
        },
        {
          title: translations[2],
          content: `${this.calculateAge(new Date('1991-01-26'))} ${translations[3]}`,
        },
        {
          title: translations[4],
          content: translations[5],
        },
        {
          title: translations[6],
          content: translations[7],
        },
        {
          title: translations[8],
          content: translations[9],
        },
        {
          title: translations[10],
          content: translations[11],
        }];
      });
    return details;
  }

  private calculateAge(birthday) { // birthday is a date
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
