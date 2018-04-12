import {Component, OnInit} from '@angular/core';

// This was for a ngFor loop
// const studySupportContent = [
//   {title: 'Search by unit', imageUrl: '/assets/img/studysupport/search-by-unit.png'},
//   {title: 'Green Light tests', imageUrl: '/assets/img/studysupport/green-light.png'},
//   {title: 'Guidance', imageUrl: '/assets/img/studysupport/guidance.png'},
//   {title: 'E-Learning', imageUrl: '/assets/img/studysupport/e-learning.png'},
//   {title: 'Sample assessments', imageUrl: '/assets/img/studysupport/sample-assess.png'},
//   {title: 'Events and networking', imageUrl: '/assets/img/studysupport/events.png'}
// ];

@Component({
  selector: 'dashboard-studysupport',
  templateUrl: './studysupport.component.html',
  styleUrls: ['./studysupport.component.scss']
})

export class StudysupportComponent implements OnInit {

  studysupport = {
    heading: 'Study support',
    summary: 'Access study support resources for all areas of your qualification.',
    card1: {
      title: 'Search for study support',
      imageUrl: 'https://knowclive.github.io/dashboard/assets/img/studysupport/search-by-unit.png'
      // imageUrl: '/assets/img/studysupport/search-by-unit.png'
    },
    card2: {
      title: 'Study tips on AAT Comment',
      imageUrl: 'https://knowclive.github.io/dashboard/assets/img/studysupport/green-light.png'
    },
    card3: {
      title: 'Guidance',
      imageUrl: '/assets/img/studysupport/guidance.png'
    },
    card4: {
      title: 'Essential study support (ebook)',
      imageUrl: 'https://knowclive.github.io/dashboard/assets/img/studysupport/e-learning.png'
    },
    card5: {
      title: 'Ask a question in our forums',
      imageUrl: 'https://knowclive.github.io/dashboard/assets/img/studysupport/sample-assess.png'
    },
    card6: {
      title: 'Events and networking',
      imageUrl: 'https://knowclive.github.io/dashboard/assets/img/studysupport/events.png'
    },
  };

  // This was for a ngFor loop
  // supportContent = studySupportContent;

  // public studylist = [
  //   'stuff1',
  //   'stuff2',
  //   'stuff3'
  // ];

  constructor() {
  }

  ngOnInit() {
  }

}
