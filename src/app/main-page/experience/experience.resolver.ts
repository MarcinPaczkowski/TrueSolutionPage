import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { InfoBoxContent } from '../../commons/info-box/info-box.models';
import { ExperienceService } from './experience.service';

@Injectable()
export class ExperienceResolver implements Resolve<InfoBoxContent[]> {
    constructor(
        private experienceService: ExperienceService,
        private router: Router,
        private route: ActivatedRoute) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.experienceService.getBasicInfoAboutExperiences();
    }
}
