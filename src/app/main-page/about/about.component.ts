import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, Input } from '@angular/core';
import { InfoBoxContent } from '../../commons/info-box/info-box.models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  @Input() details: InfoBoxContent[] = [];

  currentAge: number;

  constructor(translate: TranslateService) { }

  ngOnInit() {
  }
}
