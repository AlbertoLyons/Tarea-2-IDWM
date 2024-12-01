import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormBodyComponent } from './contact-form-body.component';

describe('ContactFormBodyComponent', () => {
  let component: ContactFormBodyComponent;
  let fixture: ComponentFixture<ContactFormBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
