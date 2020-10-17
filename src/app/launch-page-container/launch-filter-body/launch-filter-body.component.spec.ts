import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchFilterBodyComponent } from './launch-filter-body.component';

describe('LaunchFilterBodyComponent', () => {
  let component: LaunchFilterBodyComponent;
  let fixture: ComponentFixture<LaunchFilterBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchFilterBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchFilterBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
