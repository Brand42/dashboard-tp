import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprogressComponent } from './myprogress.component';

describe('MyprogressComponent', () => {
  let component: MyprogressComponent;
  let fixture: ComponentFixture<MyprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
