import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsupdatesComponent } from './newsupdates.component';

describe('NewsupdatesComponent', () => {
  let component: NewsupdatesComponent;
  let fixture: ComponentFixture<NewsupdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsupdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
