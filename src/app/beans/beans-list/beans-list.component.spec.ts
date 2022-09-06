import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeansListComponent } from './beans-list.component';

describe('BeansListComponent', () => {
  let component: BeansListComponent;
  let fixture: ComponentFixture<BeansListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeansListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
