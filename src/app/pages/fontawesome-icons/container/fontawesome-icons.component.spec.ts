import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontawesomeIconsComponent } from './fontawesome-icons.component';

describe('FontawesomeIconsComponent', () => {
  let component: FontawesomeIconsComponent;
  let fixture: ComponentFixture<FontawesomeIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontawesomeIconsComponent]
    });
    fixture = TestBed.createComponent(FontawesomeIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
