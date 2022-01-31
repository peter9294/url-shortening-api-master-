import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedStatisticsComponent } from './advanced-statistics.component';

describe('AdvancedStatisticsComponent', () => {
  let component: AdvancedStatisticsComponent;
  let fixture: ComponentFixture<AdvancedStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
