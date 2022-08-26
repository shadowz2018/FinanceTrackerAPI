import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCatorComponent } from './add-edit-cator.component';

describe('AddEditCatorComponent', () => {
  let component: AddEditCatorComponent;
  let fixture: ComponentFixture<AddEditCatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
