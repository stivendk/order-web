import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemCartComponent } from './order-item-cart.component';

describe('OrderItemCartComponent', () => {
  let component: OrderItemCartComponent;
  let fixture: ComponentFixture<OrderItemCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderItemCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderItemCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
