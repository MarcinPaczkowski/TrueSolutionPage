import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoBoxContent } from '../commons/info-box/info-box.models';
import { Skills } from './skills/skills.models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
  aboutDetails: InfoBoxContent[] = [];
  experienceDetails: InfoBoxContent[] = [];
  skills: Skills;
  isPolish = true;
  languageToChange = 'EN';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private translateService: TranslateService) { }

  ngOnInit() {
    this.languageToChange = this.translateService.currentLang === 'pl' ? 'EN' : 'PL';
    this.isPolish = this.translateService.currentLang === 'pl';

    this.route.data.subscribe((data: {
      aboutDetails: InfoBoxContent[],
      experienceDetails: InfoBoxContent[],
      skills: Skills
    }) => {
      this.aboutDetails = data.aboutDetails;
      this.experienceDetails = data.experienceDetails;
      this.skills = data.skills;
    });
  }

  changeLanguage() {
    this.isPolish = !this.isPolish;
    this.languageToChange = this.isPolish ? 'EN' : 'PL';
    console.log(this.isPolish);
    this.translateService.use(this.isPolish ? 'pl' : 'en');
  }
}
