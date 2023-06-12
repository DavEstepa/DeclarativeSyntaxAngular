import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPointerComponent } from './master-pointer.component';

describe('MasterPointerComponent', () => {
  let component: MasterPointerComponent;
  let fixture: ComponentFixture<MasterPointerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterPointerComponent]
    });
    fixture = TestBed.createComponent(MasterPointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
