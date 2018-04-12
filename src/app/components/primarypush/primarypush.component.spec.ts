import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarypushComponent } from './primarypush.component';

describe('PrimarypushComponent', () => {
  let component: PrimarypushComponent;
  let fixture: ComponentFixture<PrimarypushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarypushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarypushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
