import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Project } from '../experience.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.elementRef.nativeElement.scrollIntoView();
    this.route.data.subscribe((data: { projects: Project[] }) => {
      this.projects = data.projects;
    });
  }

  goBack() {
    this.router.navigate(['../']);
  }
}
