import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [
   { path: '', component: MainPageComponent },
];

export const mainPageRouting =  RouterModule.forChild(routes);
