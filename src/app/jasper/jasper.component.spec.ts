import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JasperComponent } from './jasper.component';

describe('JasperComponent', () => {
  let component: JasperComponent;
  let fixture: ComponentFixture<JasperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JasperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JasperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
