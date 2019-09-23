import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiResourceEditorComponent } from './api-resource-editor.component';

describe('ApiResourceEditorComponent', () => {
  let component: ApiResourceEditorComponent;
  let fixture: ComponentFixture<ApiResourceEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiResourceEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiResourceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
