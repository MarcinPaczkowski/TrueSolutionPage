import { Component, OnInit, Input } from '@angular/core';
import { IntroSocialMediaButton } from '../intro.models';

@Component({
  selector: '[appIntroSocialMedia]',
  templateUrl: './intro-social-media.component.html'
})

export class IntroSocialMediaComponent implements OnInit {
  @Input() socialMediaButton: IntroSocialMediaButton;
  constructor() { }

  ngOnInit() {
  }

}
