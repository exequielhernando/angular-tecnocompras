import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnocomprasProductsComponent } from './tecnocompras-products.component';

describe('TecnocomprasProductsComponent', () => {
  let component: TecnocomprasProductsComponent;
  let fixture: ComponentFixture<TecnocomprasProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnocomprasProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnocomprasProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
