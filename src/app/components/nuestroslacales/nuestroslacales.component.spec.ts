import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroslacalesComponent } from './nuestroslacales.component';

describe('NuestroslacalesComponent', () => {
  let component: NuestroslacalesComponent;
  let fixture: ComponentFixture<NuestroslacalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestroslacalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuestroslacalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
