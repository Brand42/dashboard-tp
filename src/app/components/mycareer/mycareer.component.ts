import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-mycareer',
  templateUrl: './mycareer.component.html',
  styleUrls: ['./mycareer.component.scss']
})
export class MycareerComponent implements OnInit {

  mycareer = {
    heading: 'My career',
    summary: 'There are plenty of resources here to help you - whether you\'re working in finance, or searching for your first role.',
    link1: {
      title: 'Search for UK jobs',
      url: '/'
    },
    link2: {
      title: 'Online CV builder',
      url: '/'
    },
    link3: {
      title: 'Career support',
      url: '/'
    },
    link4: {
      title: 'Record work experience',
      url: '/'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
