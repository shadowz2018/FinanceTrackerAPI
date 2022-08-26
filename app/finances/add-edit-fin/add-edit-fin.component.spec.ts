import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFinComponent } from './add-edit-fin.component';

describe('AddEditFinComponent', () => {
  let component: AddEditFinComponent;
  let fixture: ComponentFixture<AddEditFinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
