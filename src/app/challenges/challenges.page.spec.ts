import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesPage } from './challenges.page';

describe('ChallengesPage', () => {
  let component: ChallengesPage;
  let fixture: ComponentFixture<ChallengesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
