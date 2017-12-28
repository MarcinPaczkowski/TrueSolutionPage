import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../experience.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((data: { projects: Project[] }) => {
      this.projects = data.projects;
    });
  }

  goBack() {
    this.router.navigate(['../']);
  }

}
