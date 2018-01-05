import { Component, OnInit, ElementRef } from '@angular/core';
import { ExperienceCompanyDetails } from '../experience.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html'
})
export class ExperienceDetailsComponent implements OnInit {
  experienceCompaniesDetails: ExperienceCompanyDetails[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.scrollIntoView();
    this.route.data.subscribe((data: { experienceDetails: ExperienceCompanyDetails[] }) => {
      this.experienceCompaniesDetails = data.experienceDetails;
    });
  }
  
  goBack() {
    this.router.navigate(['../']);
  }

}
