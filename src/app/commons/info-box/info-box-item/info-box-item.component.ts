import { Component, OnInit, Input } from '@angular/core';
import { InfoBoxContent } from '../info-box.models';

@Component({
  selector: 'app-info-box-item',
  templateUrl: './info-box-item.component.html'
})
export class InfoBoxItemComponent implements OnInit {
  @Input() infoBoxContent: InfoBoxContent;
  constructor() { }

  ngOnInit() {
  }

}
