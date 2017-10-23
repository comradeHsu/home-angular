import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRentAddComponent } from './admin-rent-add.component';

describe('AdminRentAddComponent', () => {
  let component: AdminRentAddComponent;
  let fixture: ComponentFixture<AdminRentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
