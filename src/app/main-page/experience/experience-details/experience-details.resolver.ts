import { Project, ExperienceCompanyDetails } from './../experience.models';
import { ExperienceService } from './../experience.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class ExperienceDetailsResolver implements Resolve<ExperienceCompanyDetails[]> {
    constructor(
        private experienceService: ExperienceService,
        private router: Router,
        private route: ActivatedRoute) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.experienceService.getDetailsAboutExperience();
    }
}
