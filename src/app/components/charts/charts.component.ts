import { Component, Input, OnInit } from '@angular/core';
import { NetworkCallsService } from '../../common/services/network-calls.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  @Input()
  chartType;

  @Input()
  chartLabels: Array<any>;

  @Input()
  chartDatasets: Array<any>;

  // public chartColors: Array<any> = [
  //   {
  //     backgroundColor: 'rgba(105, 0, 132, .2)',
  //     borderColor: 'rgba(200, 99, 132, .7)',
  //     borderWidth: 2,
  //   },
  // ];
  @Input()
  public chartColors;

  @Input()
  public chartOptions: any;

  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}

  constructor(private networkCall: NetworkCallsService) {}

  ngOnInit(): void {
    // console.log(this.chartType)
    // console.log(this.chartType)
    // console.log(this.chartType)
    // console.log(this.chartType)
    // console.log(this.chartType)
    // console.log(this.chartType)
  }
}
