import { Component, OnInit } from '@angular/core';
import { IntroSocialMediaButton } from './intro.models';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html'
})

export class IntroComponent implements OnInit {
  private companyName = 'True Solution';
  private ownerName = 'Marcin Paczkowski';
  private positionMame = 'Fullstack Developer';
  private socialMediaButtons: IntroSocialMediaButton[] = [{
    icon: 'fa-user-circle',
    name: 'GoldenLine',
    url: 'http://www.goldenline.pl/marcin-paczkowski8/'
  },
  {
    icon: 'fa-linkedin',
    name: 'Linkedin',
    url: 'https://pl.linkedin.com/in/marcin-paczkowski-a4a029101'
  },
  {
    icon: 'fa-github',
    name: 'GitHub',
    url: 'https://github.com/pakos1/'
  }];

  constructor() {
  }

  ngOnInit() {
  }
}