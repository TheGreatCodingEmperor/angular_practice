// =============================
// Email: info@eXentric.work
// www.eXentric.work/templates
// =============================

import { Component, ViewChild } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'grants',
    templateUrl: './grants.component.html',
    styleUrls: ['./grants.component.scss'],
    animations: [fadeInOut]
})
export class GrantsComponent {
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    displayedColumns = ['clientId', 'created'];
    dataSource: MatTableDataSource<string>;
  
}
