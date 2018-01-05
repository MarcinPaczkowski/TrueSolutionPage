import { AboutResolver } from './about/about.resolver';
import { ProjectResolver } from './experience/projects/project.resolver';
import { ProjectsComponent } from './experience/projects/projects.component';
import { ExperienceDetailsComponent } from './experience/experience-details/experience-details.component';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { ExperienceDetailsResolver } from './experience/experience-details/experience-details.resolver';
import { ExperienceResolver } from './experience/experience.resolver';
import { SkillsResolver } from './skills/skills.resolver';
import { IntroResolver } from './intro/intro.resolver';

const routes: Routes = [
   { path: '', component: MainPageComponent, resolve: {
       aboutDetails: AboutResolver,
       experienceDetails: ExperienceResolver,
       skills: SkillsResolver,
       intro: IntroResolver
   }},
   { path: 'experience', component: ExperienceDetailsComponent, resolve: {
       experienceDetails: ExperienceDetailsResolver } },
   { path: 'projects', component: ProjectsComponent, resolve: { projects: ProjectResolver }}
];

export const mainPageRouting =  RouterModule.forChild(routes);
