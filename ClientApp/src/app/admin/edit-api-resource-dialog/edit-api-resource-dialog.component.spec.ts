import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApiResourceDialogComponent } from './edit-api-resource-dialog.component';

describe('EditApiResourceDialogComponent', () => {
  let component: EditApiResourceDialogComponent;
  let fixture: ComponentFixture<EditApiResourceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditApiResourceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditApiResourceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
