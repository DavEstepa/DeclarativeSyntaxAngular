import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicChartPieComponent } from './basic-chart-pie.component';

describe('BasicChartPieComponent', () => {
  let component: BasicChartPieComponent;
  let fixture: ComponentFixture<BasicChartPieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicChartPieComponent]
    });
    fixture = TestBed.createComponent(BasicChartPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
