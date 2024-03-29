/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditCityComponent } from './edit-city.component';

describe('EditCityComponent', () => {
  let component: EditCityComponent;
  let fixture: ComponentFixture<EditCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
