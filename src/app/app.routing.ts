import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageModule } from './main-page/main-page.module';
const routes: Routes = [
    { path: '', loadChildren: '../app/main-page/main-page.module.ts#MainPageModule'},
    { path: '**', component: PageNotFoundComponent }
];

export const appRouting =  RouterModule.forRoot(routes);
