import { Component, OnInit, ViewChild } from '@angular/core';

import * as Config from 'src/app/config';
import * as helperJS from 'src/assets/js/app.js';

import { BasicService } from 'src/app/services/basic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public appName = Config.appName;
  public charts: any = {};
  toastMessage: any = '';

  constructor(
    private basic: BasicService,
  ) {
    this.basic.setTitle('Dashboard');

    let rData: any = this.basic.getRouterData();

    if(rData) {
      if(typeof(rData.message) != 'undefined') {
        this.toastMessage = rData.message;
        helperJS.toast(this.toastMessage);
      }
    }

    this.setChartData();
  }

  ngOnInit(): void {
  }

  setChartData() {
    this.charts.radialBarChart = {
      series: [60],
      chart: {
        height: 200,
        type: 'radialBar',
        offsetY: 0,
      },
      plotOptions: {
        radialBar: {
          track: {
            strokeWidth: "100%",
            margin: 5,
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2
            },
          },
        },
      },
      labels: ['Progress'],
    };

    this.charts.multiRadialBarChart = {
      series: [76, 67, 61, 100],
      chart: {
        type: 'radialBar',
        height: 150,
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      labels: ['A', 'B', 'C', 'D'],
      legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: "left",
        offsetX: 50,
        offsetY: 10,
        labels: {
          useSeriesColors: true,
        },
        formatter: function(seriesName: any, opts: any) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 3,
        },
      },
    };

    this.charts.timelineChart = {
      series: [
        {
          data: [
            { x: 'Analysis', y: [ new Date('2022-02-02').getTime(), new Date('2022-02-10').getTime(), ], fillColor: '#008FFB', },
            { x: 'Design', y: [ new Date('2022-02-10').getTime(), new Date('2022-02-25').getTime(), ], fillColor: '#00E396', },
            { x: 'Coding', y: [ new Date('2022-02-25').getTime(), new Date('2022-03-20').getTime(), ], fillColor: '#775DD0', },
            { x: 'Testing', y: [ new Date('2022-03-20').getTime(), new Date('2022-04-10').getTime(), ], fillColor: '#FEB019', },
            { x: 'Deployment', y: [ new Date('2022-04-10').getTime(), new Date('2022-04-15').getTime(), ], fillColor: '#FF4560', },
          ],
        },
      ],
      chart: {
        type: 'rangeBar',
        height: 350,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      xaxis: {
        type: 'datetime',
      },
    };

    this.charts.lineChart = {
      series: [
        {
          name: 'App Usage',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb',  'Mar',  'Apr',  'May',  'Jun',  'Jul',  'Aug', 'Sep'],
      },
    };

    this.charts.barChart = {
      series: [
        {
          name: 'App Usage',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb',  'Mar',  'Apr',  'May',  'Jun',  'Jul',  'Aug', 'Sep'],
      },
    };

    this.charts.pieChart = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: 'pie',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    };

    this.charts.donutChart = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: 'donut',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    };

    this.charts.radarChart = {
      series: [
        { name: 'Team Blue', data: [80, 50, 30, 40, 100, 20] },
        { name: 'Team Green', data: [20, 30, 40, 80, 20, 80] },
        { name: 'Team Orange', data: [44, 76, 78, 13, 43, 10] },
      ],
      chart: {
        type: 'radar',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: 2,
      },
      fill: {
        opacity: 0.2,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: ['2011', '2012', '2013', '2014', '2015', '2016'],
      },
    };

    this.charts.splineAreaChart = {
      series: [
        { name: 'A', data: [31, 40, 28, 51, 42, 109, 100], },
        { name: 'B', data: [11, 32, 45, 32, 34, 52, 41], },
      ],
      chart: {
        height: 350,
        type: 'area',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2022-02-25T00:00:00.738Z',
          '2022-02-25T01:00:00.738Z',
          '2022-02-25T02:00:00.738Z',
          '2022-02-25T03:00:00.738Z',
          '2022-02-25T04:00:00.738Z',
          '2022-02-25T05:00:00.738Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };
  }

}
