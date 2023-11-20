import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
//Service
import { DasboardService } from 'src/app/core/service/dashboard.service';

export interface DialogData {
  ip: string;
  porta: string;
  painel: string
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  message!:string;
  ip!:string;
  door!:string;
  namePainel!:string;
  //dialogRef: any;

  constructor(
    private dasboardService: DasboardService,
    public dialogRef: MatDialogRef<MessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,

  ) { }

  ngOnInit(): void {
    this.namePainel = this.data.painel;
  }


    save() {
      this.dasboardService.setMessage(this.data.ip, this.message, this.data.porta).subscribe(
        (result: any)  => {
        this.dialogRef.close();

      });
    }



}
