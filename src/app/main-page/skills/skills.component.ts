import { Component, OnInit } from '@angular/core';
import { TagInfo } from '../../commons/tags/tags.models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {
  backendTags: TagInfo[] = [{
    name: '.NET',
    buttonColor: 'btn-success'
  },
  {
    name: '.NET Core',
    buttonColor: 'btn-success'
  },
  {
    name: 'C#',
    buttonColor: 'btn-success'
  },
  {
    name: 'WebApi2',
    buttonColor: 'btn-success'
  },
  {
    name: 'REST',
    buttonColor: 'btn-success'
  },
  {
    name: 'Entity Framework',
    buttonColor: 'btn-success'
  },
  {
    name: 'SQL/T-SQL',
    buttonColor: 'btn-success'
  }];

  frontendTags: TagInfo[] = [{
    name: 'Angular2',
    buttonColor: 'btn-danger'
  },
  {
    name: 'JavaScript',
    buttonColor: 'btn-danger'
  },
  {
    name: 'ECMAScript6',
    buttonColor: 'btn-danger'
  },
  {
    name: 'TypeScript',
    buttonColor: 'btn-danger'
  },
  {
    name: 'HTML5',
    buttonColor: 'btn-danger'
  },
  {
    name: 'CSS/SASS',
    buttonColor: 'btn-danger'
  },
  {
    name: 'Bootstrap',
    buttonColor: 'btn-danger'
  },
  {
    name: 'WebPack2',
    buttonColor: 'btn-danger'
  },
  {
    name: 'Angular-Cli',
    buttonColor: 'btn-danger'
  }];

  toolsTags: TagInfo[] = [{
    name: 'Visual Studio Community',
    buttonColor: 'btn-warning'
  },
  {
    name: 'Visual Studio Code',
    buttonColor: 'btn-warning'
  },
  {
    name: 'Git',
    buttonColor: 'btn-warning'
  },
  {
    name: 'SCRUM',
    buttonColor: 'btn-warning'
  },
  {
    name: 'Windows',
    buttonColor: 'btn-warning'
  },
  {
    name: 'macOS',
    buttonColor: 'btn-warning'
  },
  {
    name: 'Software Craftsmanship',
    buttonColor: 'btn-warning'
  },
  {
    name: 'Clean Code',
    buttonColor: 'btn-warning'
  },
  {
    name: 'eXtreme Programming',
    buttonColor: 'btn-warning'
  }];

  constructor() { }

  ngOnInit() {
  }

}
