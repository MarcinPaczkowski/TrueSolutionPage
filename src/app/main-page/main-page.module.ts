import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { mainPageRouting } from './main-page.routing';
import { SharedModule } from '../shared.module';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { NavItemComponent } from './nav-panel/nav-item/nav-item.component';
import { IntroComponent } from './intro/intro.component';
import { IntroSocialMediaComponent } from './intro/intro-social-media/intro-social-media.component';
// import { AboutComponent } from './about/about.component';
// import { ExperienceComponent } from './experience/experience.component';
// import { SkillsComponent } from './skills/skills.component';
// import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    MainPageComponent,
    NavPanelComponent,
    NavItemComponent,
    IntroComponent,
    IntroSocialMediaComponent,
    // AboutComponent,
    // ExperienceComponent,
    // SkillsComponent,
    // FooterComponent
],
  imports: [ mainPageRouting, SharedModule ],
  providers: [ ]
})

export class MainPageModule { }
