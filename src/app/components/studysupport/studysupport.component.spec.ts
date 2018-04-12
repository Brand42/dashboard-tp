import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudysupportComponent } from './studysupport.component';

describe('StudysupportComponent', () => {
  let component: StudysupportComponent;
  let fixture: ComponentFixture<StudysupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudysupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudysupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
