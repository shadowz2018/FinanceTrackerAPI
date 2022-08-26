import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCatorComponent } from './show-cator.component';

describe('ShowCatorComponent', () => {
  let component: ShowCatorComponent;
  let fixture: ComponentFixture<ShowCatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
