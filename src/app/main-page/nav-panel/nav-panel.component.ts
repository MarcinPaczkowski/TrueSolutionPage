import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html'
})
export class NavPanelComponent implements OnInit {
  items = ['O mnie', 'CV'];

  constructor() { }

  ngOnInit() {
  }

}
