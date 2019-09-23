// =============================
// Email: info@eXentric.work
// www.eXentric.work/templates
// =============================

import { Component, OnInit, AfterViewInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { fadeInOut } from '../../services/animations';
import { AlertService, DialogType, MessageSeverity } from '../../services/alert.service';
import { AppTranslationService } from '../../services/app-translation.service';
import { AccountService } from '../../services/account.service';
import { Utilities } from '../../services/utilities';
import { Client } from '../../models/client.model';
import { Permission } from '../../models/permission.model';
// import { EditClientDialogComponent } from '../edit-client-dialog/edit-client-dialog.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
  animations: [fadeInOut]
})
export class ClientListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns = ['client ID', 'client Name'];
  dataSource: MatTableDataSource<Client>;
  allPermissions: Permission[] = [];
  sourceClient: Client;
  editingClientName: { name: string };
  loadingIndicator: boolean;

  constructor(
    private alertService: AlertService,
    private translationService: AppTranslationService,
    private accountService: AccountService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  get canManageClients() {
    return true;
    // return this.accountService.userHasPermission(Permission.manageClientsPermission);
  }

  ngOnInit() {
    this.loadData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }

  private refresh() {
    // Causes the filter to refresh there by updating with recently added data.
    this.applyFilter(this.dataSource.filter);
  }

  private updateClients(client: Client) {
    if (this.sourceClient) {
      Object.assign(this.sourceClient, client);
      this.sourceClient = null;
    } else {
      this.dataSource.data.push(client);
    }

    this.refresh();
  }

  private loadData() {
    // this.alertService.startLoadingMessage();
    // this.loadingIndicator = true;

    // this.accountService.getClientsAndPermissions()
    //   .subscribe(results => {
    //     this.alertService.stopLoadingMessage();
    //     this.loadingIndicator = false;

    //     this.dataSource.data = results[0];
    //     this.allPermissions = results[1];
    //   },
    //     error => {
    //       this.alertService.stopLoadingMessage();
    //       this.loadingIndicator = false;

    //       this.alertService.showStickyMessage('Load Error', `Unable to retrieve clients from the server.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`,
    //         MessageSeverity.error, error);
    //     });
  }

  // public editClient(client?: Client) {
  //   this.sourceClient = client;

  //   const dialogRef = this.dialog.open(EditClientDialogComponent,
  //     {
  //       panelClass: 'mat-dialog-md',
  //       data: { client, allPermissions: this.allPermissions }
  //     });
  //   dialogRef.afterClosed().subscribe(client => {
  //     if (client && this.canManageClients) {
  //       this.updateClients(client);
  //     }
  //   });
  // }

  // public confirmDelete(client: Client) {
  //   this.snackBar.open(`Delete ${client.name} client?`, 'DELETE', { duration: 5000 })
  //     .onAction().subscribe(() => {
  //       this.alertService.startLoadingMessage('Deleting...');
  //       this.loadingIndicator = true;

  //       this.accountService.deleteClient(client)
  //         .subscribe(results => {
  //           this.alertService.stopLoadingMessage();
  //           this.loadingIndicator = false;
  //           this.dataSource.data = this.dataSource.data.filter(item => item !== client);
  //         },
  //           error => {
  //             this.alertService.stopLoadingMessage();
  //             this.loadingIndicator = false;

  //             this.alertService.showStickyMessage('Delete Error', `An error occured whilst deleting the client.\r\nError: "${Utilities.getHttpResponseMessages(error)}"`,
  //               MessageSeverity.error, error);
  //           });
  //     });
  // }
}
