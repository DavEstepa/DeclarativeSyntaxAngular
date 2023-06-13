import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicChartLineComponent } from './basic-chart-line.component';

describe('BasicChartLineComponent', () => {
  let component: BasicChartLineComponent;
  let fixture: ComponentFixture<BasicChartLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicChartLineComponent]
    });
    fixture = TestBed.createComponent(BasicChartLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
