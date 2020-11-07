import { Component, OnInit } from '@angular/core';
import { NetworkCallsService } from '../../common/services/network-calls.service';
import { DataService } from '../../common/services/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private networkCall: NetworkCallsService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.networkCall.getChartData().subscribe((data: any) => {
      this.dataService.changeData(data);
    });
  }
}
