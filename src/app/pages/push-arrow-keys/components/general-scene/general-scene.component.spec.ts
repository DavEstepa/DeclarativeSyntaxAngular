import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSceneComponent } from './general-scene.component';

describe('GeneralSceneComponent', () => {
  let component: GeneralSceneComponent;
  let fixture: ComponentFixture<GeneralSceneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralSceneComponent]
    });
    fixture = TestBed.createComponent(GeneralSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
