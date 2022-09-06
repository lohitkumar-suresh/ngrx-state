import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBeanComponent } from './view-bean.component';

describe('ViewBeanComponent', () => {
  let component: ViewBeanComponent;
  let fixture: ComponentFixture<ViewBeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBeanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
