import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiResourceEditorComponent } from '../api-resource-editor/api-resource-editor.component';

@Component({
  selector: 'app-edit-api-resource-dialog',
  templateUrl: './edit-api-resource-dialog.component.html',
  styleUrls: ['./edit-api-resource-dialog.component.scss']
})
export class EditApiResourceDialogComponent implements AfterViewInit {
  @ViewChild(ApiResourceEditorComponent,{static:true})
  apiEditor:ApiResourceEditorComponent;
  claims=[];

  constructor(
    public dialogRef: MatDialogRef<EditApiResourceDialogComponent>,
  ) { }

  ngAfterViewInit(){

    this.claims.push('test1');
    this.claims.push('test2');
  }

  canManageApi(){
    return true;
  }
  nothing(){}
  save(){
    this.dialogRef.close(null);
  }
  cancel(){
    this.dialogRef.close(null);
  }
  close(){
    this.dialogRef.close(null);
  }
}
