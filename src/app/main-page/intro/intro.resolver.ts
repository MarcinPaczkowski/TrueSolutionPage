import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { IntroSocialMediaButton } from './intro.models';
import { IntroService } from './intro.service';

@Injectable()
export class IntroResolver implements Resolve<IntroSocialMediaButton[]> {
    constructor(
        private introService: IntroService,
        private router: Router,
        private route: ActivatedRoute) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.introService.getDetails();
    }
}
