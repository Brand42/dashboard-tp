import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-adminresults',
  templateUrl: './adminresults.component.html',
  styleUrls: ['./adminresults.component.scss']
})
export class AdminresultsComponent implements OnInit {

  adminresults = {
    title: 'Assessment and results',
    summary: 'View detailed results information on your qualification dashboard.'
  };

  constructor() { }

  ngOnInit() {
  }

}
