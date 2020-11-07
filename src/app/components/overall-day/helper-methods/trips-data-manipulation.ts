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
    backgroundColor: 'rgba(0, 137, 132, .2)',
    borderColor: 'rgba(200, 99, 132, .7)',
    borderWidth: 1,
  },
];

export const getTripsChartOptions = () => {
  return chartOptions;
};

export const getTripsChartColors = () => {
  return chartColorsLine;
};
