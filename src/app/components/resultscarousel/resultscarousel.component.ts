import { Component, OnInit } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';

@Component({
  selector: 'dashboard-resultscarousel',
  templateUrl: './resultscarousel.component.html',
  styleUrls: ['./resultscarousel.component.scss']
})
export class ResultscarouselComponent implements OnInit {

  public carouselOne: NgxCarousel;

  constructor() { }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 12000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: false,
      custom: 'banner'
    };
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }

}