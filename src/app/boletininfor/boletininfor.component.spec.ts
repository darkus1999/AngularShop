import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletininforComponent } from './boletininfor.component';

describe('BoletininforComponent', () => {
  let component: BoletininforComponent;
  let fixture: ComponentFixture<BoletininforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletininforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletininforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
