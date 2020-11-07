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
    backgroundColor: 'rgba(0, 250, 220, .2)',
    borderColor: 'rgba(0, 213, 132, .7)',
    borderWidth: 2,
  },
];

export const getFuelChartOptions = () => {
  return chartOptions;
};

export const getFuelChartColors = () => {
  return chartColorsLine;
};
