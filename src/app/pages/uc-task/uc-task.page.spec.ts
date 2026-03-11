import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UcTaskPage } from './uc-task.page';

describe('UcTaskPage', () => {
  let component: UcTaskPage;
  let fixture: ComponentFixture<UcTaskPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UcTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
