import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiquePageComponent } from './boutique-page.component';

describe('BoutiquePageComponent', () => {
  let component: BoutiquePageComponent;
  let fixture: ComponentFixture<BoutiquePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutiquePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoutiquePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
