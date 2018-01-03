import { AboutService } from './about.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { InfoBoxContent } from '../../commons/info-box/info-box.models';

@Injectable()
export class AboutResolver implements Resolve<InfoBoxContent[]> {
    constructor(
        private aboutService: AboutService,
        private router: Router,
        private route: ActivatedRoute) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.aboutService.getDetails();
    }
}
