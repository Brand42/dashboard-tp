import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrepickerComponent } from './centrepicker.component';

describe('CentrepickerComponent', () => {
  let component: CentrepickerComponent;
  let fixture: ComponentFixture<CentrepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
