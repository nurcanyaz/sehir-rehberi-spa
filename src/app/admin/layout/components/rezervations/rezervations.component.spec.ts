import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervationsComponent } from './rezervations.component';

describe('RezervationsComponent', () => {
  let component: RezervationsComponent;
  let fixture: ComponentFixture<RezervationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RezervationsComponent]
    });
    fixture = TestBed.createComponent(RezervationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
