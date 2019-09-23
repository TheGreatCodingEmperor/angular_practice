// =============================
// Email: info@eXentric.work
// www.eXentric.work/templates
// =============================

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { MatTableDataSource } from '@angular/material/table';
import { ApiResource } from 'src/app/models/apiResource.model';
import { Permission } from 'src/app/models/permission.model';
import { MatDialog } from '@angular/material/dialog';
import { EditApiResourceDialogComponent } from '../edit-api-resource-dialog/edit-api-resource-dialog.component';
import { ApiResourceEditorComponent } from '../api-resource-editor/api-resource-editor.component';


@Component({
    selector: 'apiResource',
    templateUrl: './apiResource.component.html',
    styleUrls: ['./apiResource.component.scss'],
    animations: [fadeInOut]
})
export class ApiResourcesComponent {
    displayedColumns = ['Name','actions'];
    dataSource: MatTableDataSource<ApiResource>;

    constructor(
        private dialog: MatDialog
    ){
        this.dataSource = new MatTableDataSource();
    }

    ngOnInit(){
        let permission:Permission[]=[];
        let data:ApiResource ={
            id:'007',
            name:'123',
            enabled:1,
            displayName:'dis',
            description:'123',
            usersCount:100,
            permissions:permission
        }
        this.dataSource.data.splice(0,0,data);
    }
    edit(){
        const dialogRef = this.dialog.open(EditApiResourceDialogComponent);
        dialogRef.afterClosed().subscribe(()=>
            {console.log("return");}
        );
    }
    delete(){}
}
