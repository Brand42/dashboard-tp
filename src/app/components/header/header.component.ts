import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header = {
      firstname: 'John',
      lastname: 'Snow',
      content: 'Some home content.',
      // image: 'https://www.aat.org.uk/assets/img/frontpage/img_full.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

}
