import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceboxComponent } from './servicebox.component';

describe('ServiceboxComponent', () => {
  let component: ServiceboxComponent;
  let fixture: ComponentFixture<ServiceboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
