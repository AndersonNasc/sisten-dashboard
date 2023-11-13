import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//Service
import { DasboardService } from 'src/app/core/service/dashboard.service';
//Model
import { Dashboard } from '../../models/dashboard';
//Material
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

//Components
import { MessageComponent }from 'src/app/shared/components/message/message.component'
@Component({
  selector: 'app-grid-panels',
  templateUrl: './grid-panels.component.html',
  styleUrls: ['./grid-panels.component.scss'],
})
export class GridPanelsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'image',
    'dashboard',
    'ip',
    'idPoint',
    'model',
    'door',
    'status',
    'last_status',
    'message',
    'update',
    'delete'
  ];
  dataSource = new MatTableDataSource<Dashboard>();
  dashboard: Dashboard[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private dasboardService: DasboardService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getListUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getListUsers() {
    this.dasboardService.getList().subscribe((dashboard: Dashboard[]) => {
      this.dashboard = dashboard;
      this.dataSource.data = this.dashboard;
      console.log(this.dataSource.data)
    });
  }

  updateDashboard(user: Dashboard) {
    // this.router.navigate(['edit-dashboard', user.id]);
  }

  delete(id: number) {
    // this.dasboardService.deleteListId(id).subscribe((res) => {
    //   this.router.navigate(['screen-panels']);
    //   this.getListUsers();
    // });
  }

  newDashboard() {
    // this.router.navigate(['new-dashboard']);
  }



  animal!: string;
  name!: string;

  openDialog(id:string): void {
    const dialogRef = this.dialog.open(MessageComponent, {
      width: '250px',
      data: {id: id, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
