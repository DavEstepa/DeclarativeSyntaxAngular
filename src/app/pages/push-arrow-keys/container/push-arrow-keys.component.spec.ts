import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushArrowKeysComponent } from './push-arrow-keys.component';

describe('PushArrowKeysComponent', () => {
  let component: PushArrowKeysComponent;
  let fixture: ComponentFixture<PushArrowKeysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PushArrowKeysComponent]
    });
    fixture = TestBed.createComponent(PushArrowKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
