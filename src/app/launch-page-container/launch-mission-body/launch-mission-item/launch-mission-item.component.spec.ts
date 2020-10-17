import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchMissionItemComponent } from './launch-mission-item.component';

describe('LaunchMissionItemComponent', () => {
  let component: LaunchMissionItemComponent;
  let fixture: ComponentFixture<LaunchMissionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchMissionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchMissionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
