import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFootComponent } from './admin-foot.component';

describe('AdminFootComponent', () => {
  let component: AdminFootComponent;
  let fixture: ComponentFixture<AdminFootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
