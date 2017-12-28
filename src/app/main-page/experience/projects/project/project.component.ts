import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
  @Input() project;
  @Input() isEven;
  
  constructor() { }

  ngOnInit() {
  }

}
