import { Skills } from './skills.models';
import { Component, OnInit, Input } from '@angular/core';
import { TagInfo } from '../../commons/tags/tags.models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {
  @Input() skills: Skills;

  constructor() { }

  ngOnInit() {
  }

}
