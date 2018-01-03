import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoBoxContent } from '../commons/info-box/info-box.models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
  aboutDetails: InfoBoxContent[] = [];
  experienceDetails: InfoBoxContent[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((data: {
      aboutDetails: InfoBoxContent[],
      experienceDetails: InfoBoxContent[]
    }) => {
      this.aboutDetails = data.aboutDetails;
      this.experienceDetails = data.experienceDetails;
    });
  }
}
