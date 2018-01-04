import { ExperienceService } from './experience/experience.service';
import { AboutService } from './about/about.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoBoxContent } from '../commons/info-box/info-box.models';
import { Skills } from './skills/skills.models';
import { IntroSocialMediaButton } from './intro/intro.models';
import { IntroService } from './intro/intro.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
  aboutDetails: InfoBoxContent[] = [];
  experienceDetails: InfoBoxContent[] = [];
  skills: Skills;
  introDetails: IntroSocialMediaButton[];
  isPolish = true;
  languageToChange = 'EN';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private translateService: TranslateService,
    private aboutService: AboutService,
    private experienceService: ExperienceService,
    private introService: IntroService) { }

  ngOnInit() {
    this.languageToChange = this.translateService.currentLang === 'pl' ? 'EN' : 'PL';
    this.isPolish = this.translateService.currentLang === 'pl';

    this.route.data.subscribe((data: {
      aboutDetails: InfoBoxContent[],
      experienceDetails: InfoBoxContent[],
      skills: Skills,
      intro: IntroSocialMediaButton[]
    }) => {
      this.aboutDetails = data.aboutDetails;
      this.experienceDetails = data.experienceDetails;
      this.skills = data.skills;
      this.introDetails = data.intro;
    });
  }

  changeLanguage() {
    this.isPolish = !this.isPolish;
    this.languageToChange = this.isPolish ? 'EN' : 'PL';
    this.translateService.use(this.isPolish ? 'pl' : 'en');
    this.aboutDetails = this.aboutService.getDetails();
    this.experienceDetails = this.experienceService.getBasicInfoAboutExperiences();
    this.introDetails = this.introService.getDetails();
  }
}
