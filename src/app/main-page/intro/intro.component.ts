import { Component, OnInit } from '@angular/core';
import { IntroSocialMediaButton } from './intro.models';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html'
})

export class IntroComponent implements OnInit {
  companyName = 'True Solution';
  ownerName = 'Marcin Paczkowski';
  positionMame = 'Fullstack Developer';
  socialMediaButtons: IntroSocialMediaButton[] = [{
    icon: 'fa-user-circle',
    name: 'GoldenLine',
    url: 'http://www.goldenline.pl/marcin-paczkowski8/'
  },
  {
    icon: 'fa-linkedin',
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/marcin-paczkowski/'
  },
  {
    icon: 'fa-github',
    name: 'GitHub',
    url: 'https://github.com/MarcinPaczkowski/'
  },
  {
    icon: 'fa-file-pdf-o',
    name: 'CV',
    url: '../../../assets/files/Marcin Paczkowski CV.pdf'
  }];

  constructor() {
  }

  ngOnInit() {
  }
}
