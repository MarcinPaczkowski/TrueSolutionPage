import { Component, OnInit, Input } from '@angular/core';
import { InfoBoxContent } from './info-box.models';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html'
})
export class InfoBoxComponent implements OnInit {
  @Input() infoBoxContents: InfoBoxContent[];
  constructor() {}

  ngOnInit() {}
}
