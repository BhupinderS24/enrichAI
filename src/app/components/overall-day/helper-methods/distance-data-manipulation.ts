const chartOptions: any = {
  responsive: true,
  legend: {
    display: false,
  },
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      },
    ],
  },
};

const chartColorsLine: Array<any> = [
  {
    backgroundColor: 'rgba(105, 0, 132, .2)',
    borderColor: 'rgba(200, 99, 132, .7)',
    borderWidth: 2,
  },
];

export const getDistanceChartOptions = () => {
  return chartOptions;
};

export const getDistanceChartColors = () => {
  return chartColorsLine;
};
