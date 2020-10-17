import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchPageContainerComponent } from './launch-page-container.component';

describe('LaunchPageContainerComponent', () => {
  let component: LaunchPageContainerComponent;
  let fixture: ComponentFixture<LaunchPageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchPageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
