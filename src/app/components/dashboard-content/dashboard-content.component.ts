import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {

  dashcontent = {
    heading1: 'Download AAT approved logos',
    heading2: '3 saved bookmarks',
    heading3: 'Check out our SecureAssess support resources',
    heading4: 'My progress',
    heading5: 'Assessments and results',
    heading6: 'Study support',
    heading7: 'My career',
    heading8: 'News and updates'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
