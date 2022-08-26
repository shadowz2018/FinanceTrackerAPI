import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFinComponent } from './show-fin.component';

describe('ShowFinComponent', () => {
  let component: ShowFinComponent;
  let fixture: ComponentFixture<ShowFinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
