import { Component, OnInit, Input } from '@angular/core';
import { TagInfo } from './tags.models';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html'
})
export class TagsComponent implements OnInit {
  @Input() tags: TagInfo[];
  constructor() { }

  ngOnInit() {
  }
}
