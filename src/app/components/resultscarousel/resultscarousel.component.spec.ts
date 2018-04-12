import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultscarouselComponent } from './resultscarousel.component';

describe('ResultscarouselComponent', () => {
  let component: ResultscarouselComponent;
  let fixture: ComponentFixture<ResultscarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultscarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultscarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
