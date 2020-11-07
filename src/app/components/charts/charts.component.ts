import { Component, Input, OnInit } from '@angular/core';
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

  @Input()
  public chartColors;

  @Input()
  public chartOptions: any;

  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}

  constructor() {}

  ngOnInit(): void {}
}
