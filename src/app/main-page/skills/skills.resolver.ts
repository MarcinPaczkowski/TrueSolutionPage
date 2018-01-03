import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { InfoBoxContent } from '../../commons/info-box/info-box.models';
import { SkillsService } from './skills.service';
import { Skills } from './skills.models';

@Injectable()
export class SkillsResolver implements Resolve<Skills> {
    constructor(
        private skillsService: SkillsService,
        private router: Router,
        private route: ActivatedRoute) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.skillsService.getDetails();
    }
}
