import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatorgiesComponent } from './catorgies.component';

describe('CatorgiesComponent', () => {
  let component: CatorgiesComponent;
  let fixture: ComponentFixture<CatorgiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatorgiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatorgiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
