import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseroptionsPage } from './useroptions.page';

describe('UseroptionsPage', () => {
  let component: UseroptionsPage;
  let fixture: ComponentFixture<UseroptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseroptionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseroptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
