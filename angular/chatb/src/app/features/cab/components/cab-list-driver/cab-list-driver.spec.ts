import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabListDriver } from './cab-list-driver';

describe('CabListDriver', () => {
  let component: CabListDriver;
  let fixture: ComponentFixture<CabListDriver>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabListDriver]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabListDriver);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
