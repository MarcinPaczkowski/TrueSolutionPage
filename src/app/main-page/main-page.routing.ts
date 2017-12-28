import { ProjectResolver } from './experience/projects/project.resolver';
import { ProjectsComponent } from './experience/projects/projects.component';
import { ExperienceDetailsComponent } from './experience/experience-details/experience-details.component';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { ExperienceDetailsResolver } from './experience/experience-details/experience-details.resolver';

const routes: Routes = [
   { path: '', component: MainPageComponent },
   { path: 'experience', component: ExperienceDetailsComponent, resolve: {
       experienceDetails: ExperienceDetailsResolver } },
   { path: 'projects', component: ProjectsComponent, resolve: { projects: ProjectResolver }}
];

export const mainPageRouting =  RouterModule.forChild(routes);
