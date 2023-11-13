import { Component, OnInit } from '@angular/core';
//Service
import { DasboardService } from 'src/app/core/service/dashboard.service';

export interface DialogData {
  ip: string;
  door: string;
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
  dialogRef: any;

  constructor(
    private dasboardService: DasboardService,

  ) { }

  ngOnInit(): void {
  }


    save() {
      debugger
      this.dasboardService.setMessage(this.ip, this.message, this.door).subscribe((res)  => {
        this.dialogRef.close();

      });
  
  }



}
