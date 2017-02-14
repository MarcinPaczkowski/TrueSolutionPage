import { Component, OnInit, Input } from '@angular/core';
import { TagInfo } from '../tags.models';

@Component({
  selector: '[appTagItem]',
  templateUrl: './tag-item.component.html',
  styleUrls: ['./tag-item.component.scss']
})
export class TagItemComponent implements OnInit {
  @Input() tag: TagInfo;

  constructor() { }

  ngOnInit() {
  }

}
