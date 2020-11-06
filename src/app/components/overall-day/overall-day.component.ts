import { Component, OnInit } from '@angular/core';
import { NetworkCallsService } from '../../common/services/network-calls.service';
import {
  getDistanceChartOptions,
  getDistanceChartColors,
} from './helper-methods/distance-data-manipulation';
import {
  getFuelChartOptions,
  getFuelChartColors,
} from './helper-methods/fuel-data-manipulation';
import {
  getTripsChartOptions,
  getTripsChartColors,
} from './helper-methods/trips-data-manipulation';
import {
  getAlarmsChartOptions,
  getAlarmsChartColors,
} from './helper-methods/Alarms-data-manipulation';
@Component({
  selector: 'app-overall-day',
  templateUrl: './overall-day.component.html',
  styleUrls: ['./overall-day.component.css'],
})
export class OverallDayComponent implements OnInit {
  showCharts = false;

  viewBox: any[] = [
    { name: 'Alarms', value: '4', icon: '../../assets/hooter.svg' },
    { name: 'Total Online', value: '6', icon: '../../assets/car.svg' },
    { name: 'Total Tips', value: '20', icon: '../../assets/car.svg' },
    { name: 'Total distance', value: '450 km', icon: '../../assets/car.svg' },
    { name: 'Engine ON Hours', value: '12 hr', icon: '../../assets/car.svg' },
    { name: 'Fuel Consumed', value: '54 ltr', icon: '../../assets/meter.svg' },
  ];

  viewBigBox: any[] = [
    {
      name: 'Distance',
      chart: 'line',
    },
    {
      name: 'Alarms',
      chart: 'bar',
    },
    {
      name: 'Fuel',

      chart: 'line',
    },
    {
      name: 'Trips',
      chart: 'bar',
    },
  ];

  constructor(private networkCall: NetworkCallsService) {}

  ngOnInit(): void {
    this.networkCall.getChartData().subscribe((data: any) => {
      for (let index in this.viewBigBox) {
        let name = this.viewBigBox[index].name;

        switch (name) {
          case 'Distance':
            this.viewBigBox[index].chartOptions = getDistanceChartOptions();
            this.viewBigBox[index].colors = getDistanceChartColors();
            break;
          case 'Fuel':
            this.viewBigBox[index].chartOptions = getFuelChartOptions();
            this.viewBigBox[index].colors = getFuelChartColors();
            break;
          case 'Trips':
            this.viewBigBox[index].chartOptions = getTripsChartOptions();
            this.viewBigBox[index].colors = getTripsChartColors();
            break;
          case 'Alarms':
            this.viewBigBox[index].chartOptions = getAlarmsChartOptions();
            this.viewBigBox[index].colors = getAlarmsChartColors(
              data[name].datasets
            );
            break;
        }

        this.viewBigBox[index]['data'] = data[name].datasets;

        this.viewBigBox[index]['labels'] = data[name].labels;
      }

      console.log(this.viewBigBox);
      this.showCharts = true;
      console.log('DATTTTTAAAAA', data);
    });
  }
}
