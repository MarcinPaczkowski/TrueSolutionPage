import { Component, OnInit } from '@angular/core';
import { InfoBoxContent } from '../../commons/info-box/info-box.models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  private currentAge: number;
  private infoBoxContents: InfoBoxContent[] = [{
    title: 'Imię i nazwisko',
    content: 'Marcin Paczkowski',
  },
  {
    title: 'Wiek',
    content:  `${this.calculateAge(new Date('1991-01-26'))} lat`,
  },
  {
    title: 'Miejscowość',
    content: 'Poznań',
  },
  {
    title: 'Stanowisko',
    content: 'Programista (Fullstack Developer)',
  },
  {
    title: 'Wykształcenie',
    content: 'Wyższe (inżynier)',
  },
  {
    title: 'E-mail',
    content: 'paczkowski.marcin@icloud.com',
  }];
  constructor() { }

  ngOnInit() {
  }

  private calculateAge(birthday) { // birthday is a date
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
