import { Component, OnInit, Input } from '@angular/core';
import { InfoBoxContent } from '../../commons/info-box/info-box.models';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {
  @Input() details: InfoBoxContent[] = [];
  
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  goToExperience() {
    this.router.navigate(['experience']);
  }

  goToRealizedProjects() {
    this.router.navigate(['projects']);
  }
}
