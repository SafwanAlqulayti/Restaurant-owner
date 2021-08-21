import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrestaurantComponent } from './myrestaurant.component';

describe('MyrestaurantComponent', () => {
  let component: MyrestaurantComponent;
  let fixture: ComponentFixture<MyrestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyrestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
