import { Component, OnInit } from '@angular/core';
import { InfoBoxContent } from '../../commons/info-box/info-box.models';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {
  infoBoxContents: InfoBoxContent[] = [
  {
    title: 'Predictes Sp. z.o.o.',
    content: 'Fullstack Developer (03.2017 - teraz)',
  },
  {
    title: 'inSync solutions Sp. z.o.o.',
    content: 'Fullstack Developer (04.2016 - 03.2017)',
  },
  {
    title: 'Supremo Sp. z.o.o.',
    content: '.NET Developer (06.2015 - 04.2016)',
  },
  {
    title: 'Supremo Sp. z.o.o.',
    content: 'Junior .NET Developer (04.2014 - 06.2015)',
  },
  {
    title: 'Cat Traffic Sp. z.o.o',
    content: 'Stażysta (06.2013 - 06.2014)'
  }];
  constructor() { }

  ngOnInit() {
  }

}
