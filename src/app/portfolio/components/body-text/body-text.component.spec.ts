import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTextComponent } from './body-text.component';

describe('BodyTextComponent', () => {
  let component: BodyTextComponent;
  let fixture: ComponentFixture<BodyTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
