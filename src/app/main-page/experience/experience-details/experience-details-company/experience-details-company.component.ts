import { ExperienceCompanyDetails } from './../../experience.models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-details-company',
  templateUrl: './experience-details-company.component.html'
})
export class ExperienceDetailsCompanyComponent implements OnInit {
  @Input() details: ExperienceCompanyDetails;
  @Input() isEven: boolean;

  constructor() { }

  ngOnInit() {
  }


}
