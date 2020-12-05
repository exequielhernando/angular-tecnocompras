import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnocomprasAboutComponent } from './tecnocompras-about.component';

describe('TecnocomprasAboutComponent', () => {
  let component: TecnocomprasAboutComponent;
  let fixture: ComponentFixture<TecnocomprasAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnocomprasAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnocomprasAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
