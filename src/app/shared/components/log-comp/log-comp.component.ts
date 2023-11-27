
import { LogService } from 'src/app/core/service/log.service';
import { Logs } from '../../models/logs';
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


@Component({
  selector: 'app-log-comp',
  templateUrl: './log-comp.component.html',
  styleUrls: ['./log-comp.component.scss']
})
export class LogCompComponent { 

  displayedColumns: string[] = [    
    'descricao_evento',
    'tipo_evento',
    'data_evento',
  ];
  dataSource = new MatTableDataSource<Logs>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  exibirSpinner:boolean = true;

  constructor(
    private _logService: LogService,
    
  ) {}

  ngOnInit(): void {
    this.getLogs(); 
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getLogs(){
    this._logService.getLogs().subscribe((response:any) => {
      if(response.length > 0){
        this.exibirSpinner = false;
        this.dataSource.data = response;
        console.log(this.dataSource.data)
      }
    });
  }
}
