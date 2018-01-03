import { ExperienceDetailsResolver } from './experience/experience-details/experience-details.resolver';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { mainPageRouting } from './main-page.routing';
import { SharedModule } from '../shared.module';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { NavItemComponent } from './nav-panel/nav-item/nav-item.component';
import { IntroComponent } from './intro/intro.component';
import { IntroSocialMediaComponent } from './intro/intro-social-media/intro-social-media.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceDetailsComponent } from './experience/experience-details/experience-details.component';
// tslint:disable-next-line:max-line-length
import { ExperienceDetailsCompanyComponent } from './experience/experience-details/experience-details-company/experience-details-company.component';
import { ProjectsComponent } from './experience/projects/projects.component';
import { ProjectComponent } from './experience/projects/project/project.component';
import { ExperienceService } from './experience/experience.service';
import { ProjectResolver } from './experience/projects/project.resolver';
import { AboutService } from './about/about.service';
import { AboutResolver } from './about/about.resolver';
import { ExperienceResolver } from './experience/experience.resolver';

@NgModule({
  declarations: [
    MainPageComponent,
    NavPanelComponent,
    NavItemComponent,
    IntroComponent,
    IntroSocialMediaComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    FooterComponent,
    ExperienceDetailsComponent,
    ExperienceDetailsCompanyComponent,
    ProjectsComponent,
    ProjectComponent
],
  imports: [ mainPageRouting, SharedModule ],
  providers: [ ExperienceService, ProjectResolver, ExperienceDetailsResolver, AboutService,
    AboutResolver, ExperienceResolver ]
})

export class MainPageModule { }
