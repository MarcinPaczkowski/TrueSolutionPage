import { Injectable } from '@angular/core';
import { TagInfo } from '../../commons/tags/tags.models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { TranslateService } from '@ngx-translate/core';
import { Skills } from './skills.models';

@Injectable()
export class SkillsService {
  constructor(private translateService: TranslateService) {}

  getDetails() {
    const skills: Skills = {
      backend: this.getBackendDetails(),
      frontend: this.getFrontendDetails(),
      patterns: this.getPatternsDetails(),
      tools: this.getToolsDetails()
    };

    return skills;
  }

  getBackendDetails(): TagInfo[] {
    let details: TagInfo[] = [];
    Observable.combineLatest(
      this.translateService.get('SKILLS_backend1'),
      this.translateService.get('SKILLS_backend2'),
      this.translateService.get('SKILLS_backend3'),
      this.translateService.get('SKILLS_backend4'),
      this.translateService.get('SKILLS_backend5'),
      this.translateService.get('SKILLS_backend6'),
      this.translateService.get('SKILLS_backend7'),
      this.translateService.get('SKILLS_backend8'),
      this.translateService.get('SKILLS_backend15')
    ).subscribe(translations => {
      details = Array.from(Array(9).keys()).map((_, index) => {
        return {
          name: translations[index],
          buttonColor: 'btn-success'
        };
      });
    });
    return details;
  }

  getFrontendDetails(): TagInfo[] {
    let details: TagInfo[] = [];
    Observable.combineLatest(
      this.translateService.get('SKILLS_frontend1'),
      this.translateService.get('SKILLS_frontend2'),
      this.translateService.get('SKILLS_frontend3'),
      this.translateService.get('SKILLS_frontend4'),
      this.translateService.get('SKILLS_frontend5'),
      this.translateService.get('SKILLS_frontend6'),
      this.translateService.get('SKILLS_frontend7'),
      this.translateService.get('SKILLS_frontend8'),
      this.translateService.get('SKILLS_frontend12')
    ).subscribe(translations => {
      details = Array.from(Array(9).keys()).map((_, index) => {
        return {
          name: translations[index],
          buttonColor: 'btn-danger'
        };
      });
    });
    return details;
  }

  getPatternsDetails(): TagInfo[] {
    let details: TagInfo[] = [];
    Observable.combineLatest(
      this.translateService.get('SKILLS_pattern1'),
      this.translateService.get('SKILLS_pattern2'),
      this.translateService.get('SKILLS_pattern3'),
      this.translateService.get('SKILLS_pattern4'),
      this.translateService.get('SKILLS_pattern5'),
      this.translateService.get('SKILLS_pattern6'),
      this.translateService.get('SKILLS_pattern7'),
      this.translateService.get('SKILLS_pattern8'),
      this.translateService.get('SKILLS_pattern9'),
      this.translateService.get('SKILLS_pattern10')
    ).subscribe(translations => {
      details = Array.from(Array(10).keys()).map((_, index) => {
        return {
          name: translations[index],
          buttonColor: 'btn-warning'
        };
      });
    });
    return details;
  }

  getToolsDetails(): TagInfo[] {
    let details: TagInfo[] = [];
    Observable.combineLatest(
      this.translateService.get('SKILLS_tool1'),
      this.translateService.get('SKILLS_tool2'),
      this.translateService.get('SKILLS_tool3'),
      this.translateService.get('SKILLS_tool4'),
      this.translateService.get('SKILLS_tool5'),
      this.translateService.get('SKILLS_tool6'),
      this.translateService.get('SKILLS_tool7'),
      this.translateService.get('SKILLS_tool8')
    ).subscribe(translations => {
      details = Array.from(Array(8).keys()).map((_, index) => {
        return {
          name: translations[index],
          buttonColor: 'btn-primary'
        };
      });
    });
    return details;
  }
}
