import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EditApiResourceDialogComponent } from '../edit-api-resource-dialog/edit-api-resource-dialog.component';

@Component({
  selector: 'app-api-resource-editor',
  templateUrl: './api-resource-editor.component.html',
  styleUrls: ['./api-resource-editor.component.scss']
})
export class ApiResourceEditorComponent {

  n = 100;
  claims=[1,2,3,4,6,5];
  constructor(
    public dialogRef: MatDialogRef<EditApiResourceDialogComponent>,
  ) { 
  }


  canManageApi(){
    return true;
  }

  apiScopes(){}

  apiSecrets(){}

  apiProperties(){}

}
