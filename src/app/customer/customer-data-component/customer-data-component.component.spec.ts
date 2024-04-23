import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDataComponentComponent } from './customer-data-component.component';

describe('CustomerDataComponentComponent', () => {
  let component: CustomerDataComponentComponent;
  let fixture: ComponentFixture<CustomerDataComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDataComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
