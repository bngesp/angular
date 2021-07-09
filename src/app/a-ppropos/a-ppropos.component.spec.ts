import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APproposComponent } from './a-ppropos.component';

describe('APproposComponent', () => {
  let component: APproposComponent;
  let fixture: ComponentFixture<APproposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APproposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APproposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
