import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  // openDialog() {
  //   let dialogRef = this.dialog.open(DialogComponent, {
  //     width: '380px',
  //     data: {
  //       message: 'message',
  //     },
  //     disableClose: true,
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {});
  // }

  navigateTable() {
    this.router.navigateByUrl('/table');
  }

  showToastrSuccess() {
    this.toastr.success('message', 'success', {
      timeOut: 2000,
    });
  }
  showToastrError() {
    this.toastr.error('message', 'error', {
      timeOut: 3000,
    });
  }

  showSpinner() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
}
