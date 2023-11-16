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

import { MessageDeleteComponent } from '../message-delete/message-delete.component';

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
    'patrimonio',
    'active',
    'last_status',
    'message',
    'update',
    'delete'
  ];
  dataSource = new MatTableDataSource<Dashboard>();
  dashboard: Dashboard[] = [];
  perfilAdmin: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private dasboardService: DasboardService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getListUsers();

    this.perfilAdmin = (sessionStorage.getItem('perfil') == "admin" ? true : false);
    this.checkPerfilAdmin();   
  }

  checkPerfilAdmin(){
    if(!this.perfilAdmin){
      const itemsToRemove = ['message', 'delete', 'update'];
      this.displayedColumns = this.displayedColumns.filter(item => !itemsToRemove.includes(item));
    }
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
    this.router.navigate(['edit-dashboard', user._id]);
  }

  // delete(id: string) {
  //   this.dasboardService.deleteListId(id).subscribe((res) => {
  //     this.router.navigate(['screen-panels']);
  //     this.getListUsers();
  //   });
  // }

  newDashboard() {
    this.router.navigate(['new-dashboard']);
  }



  animal!: string;
  name!: string;

  openDialog(ip:string, porta:string, painel:string): void {
    const dialogRef = this.dialog.open(MessageComponent, {
      width: '450px',
      data: {ip: ip, porta: porta, painel:painel}
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }




  openConfirmDialog(id:string): void {
    
debugger
    const dialogRef = this.dialog.open(MessageDeleteComponent, {
      width: '450px',
      data: {id: id, }
    });
  }
}
