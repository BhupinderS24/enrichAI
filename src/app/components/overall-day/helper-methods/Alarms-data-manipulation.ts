const chartOptionsStacked: any = {
  responsive: true,

  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
        stacked: true,
      },
    ],
    yAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
        stacked: true,
      },
    ],
  },
};

export const getAlarmsChartOptions = () => {
  return chartOptionsStacked;
};

export const getAlarmsChartColors = (alrData) => {
  // return chartColorsLine;
  let alarmsChartColors = [];

  alrData.forEach((stackedChart) => {
    let tempBackgroundColor = [];

    stackedChart.data.forEach(() => {
      switch (stackedChart.label) {
        case 'Critical':
          tempBackgroundColor.push('rgb(255,0,0)');

          break;
        case 'Major':
          tempBackgroundColor.push('rgba(255,0,0,0.6)');

          break;
        case 'Minor':
          tempBackgroundColor.push('rgb(255,255,0)');
          break;
      }
    });

    alarmsChartColors.push({
      backgroundColor: tempBackgroundColor,
      borderWidth: 2,
    });
  });
  return alarmsChartColors;
};
