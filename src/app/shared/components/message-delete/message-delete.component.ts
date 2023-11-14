import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
//Service
import { DasboardService } from 'src/app/core/service/dashboard.service';

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-message-delete',
  templateUrl: './message-delete.component.html',
  styleUrls: ['./message-delete.component.scss'],
})
export class MessageDeleteComponent implements OnInit {

  elementId!: string;

  constructor(
    private dasboardService: DasboardService,
    private router: Router,
    public dialogRef: MatDialogRef<MessageDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }
  ) {}

  ngOnInit(): void {
    debugger
    this.elementId = this.data.id;
  }

  cancel() {
    this.dialogRef.close(false);
  }
  confirm(): void {
    if (this.elementId) {
    this.dasboardService.deleteListId(this.elementId).subscribe((res) => {
      this.elementId
      this.router.navigate(['screen-panels']);
    });
    this.dialogRef.close(true);
  }
  }
}
