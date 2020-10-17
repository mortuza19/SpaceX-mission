import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchMissionBodyComponent } from './launch-mission-body.component';

describe('LaunchMissionBodyComponent', () => {
  let component: LaunchMissionBodyComponent;
  let fixture: ComponentFixture<LaunchMissionBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchMissionBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchMissionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
