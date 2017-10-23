import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRentListComponent } from './admin-rent-list.component';

describe('AdminRentListComponent', () => {
  let component: AdminRentListComponent;
  let fixture: ComponentFixture<AdminRentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
