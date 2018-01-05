import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IntroSocialMediaButton } from './intro.models';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html'
})

export class IntroComponent implements OnInit {
  @Input() isPolish = true;
  @Input() languageToChange = 'PL';
  @Input() details: IntroSocialMediaButton[] = [];
  @Output() languageChange = new EventEmitter();

  companyName = 'True Solution';
  ownerName = 'Marcin Paczkowski';
  positionMame = 'Fullstack Developer';

  constructor() {
  }

  ngOnInit() {
  }

  changeLanguage() {
    this.languageChange.emit({});
  }
}
