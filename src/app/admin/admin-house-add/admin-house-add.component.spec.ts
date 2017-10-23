import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHouseAddComponent } from './admin-house-add.component';

describe('AdminHouseAddComponent', () => {
  let component: AdminHouseAddComponent;
  let fixture: ComponentFixture<AdminHouseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHouseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHouseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
