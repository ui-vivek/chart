import { flush } from '@angular/core/testing';
import { Chart } from 'chart.js/auto';
import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
Chart.defaults.datasets.bar.maxBarThickness = 73;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  ngOnInit() {
    let myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: [
          'January',
          'January',
          'January',
          'February',
          'March',
          'January',
          'January',
          'February',
          'February',
          'February',
          'March',
          'March',
          'March',
        ],
        datasets: [
          {
            barPercentage: 0.7,
            categoryPercentage: 0.7,

            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'US',
            data: [1, 2, 3, 1, 2, 3, 3, 1, 2, 3],
            backgroundColor: ['#3E6D9C'],
          },
          {
            barPercentage: 0.7,
            categoryPercentage: 0.7,

            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'SS',
            data: [1, 2, 3, 1, 2, 3, 3, 1, 2, 3],
            backgroundColor: ['#03C988'],
          },
          {
            barPercentage: 0.7,
            categoryPercentage: 0.7,

            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'PU',
            data: [1, 2, 3, 1, 2, 3, 3, 1, 2, 3],
            backgroundColor: ['#17594A'],
          },
          {
            barPercentage: 0.7,
            categoryPercentage: 0.7,

            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'DP',
            data: [1, 2, 3, 1, 2, 3, 3, 1, 2, 8,8,10,11,5],
            backgroundColor: ['gray'],
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              title: (context) => {},
            },
          },
        },
        indexAxis: 'y',
        maintainAspectRatio: false,
        layout: {
          padding: {
            // right: 0,
          },
        },
        scales: {
          y: {
            afterFit: (context) => {
              context.width = 100;
            },
          },
          x: {
            afterFit: (context) => {
              context.width = 100;
            },
            beginAtZero: true,
            grid: {
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    });

    new Chart('myChart2', {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'US',
            data: [1, 2, 3, 1, 2, 3, 3, 1, 2, 3],
            backgroundColor: ['#3E6D9C'],
          },
          {
            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'SS',
            data: [1, 2, 3, 1, 2, 3, 3, 1, 2, 3],
            backgroundColor: ['#03C988'],
          },
          {
            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'PU',
            data: [1, 2, 3, 1, 2, 3, 3, 1, 2, 3],
            backgroundColor: ['#17594A'],
          },
          {
            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'DP',
            data: [1, 2, 3, 1, 2, 3, 3, 1, 2, 3],
            backgroundColor: ['gray'],
          },
        ],
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,

        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              stepSize: 1, // (remove decimals)------------ work on
            },
            afterFit: (context) => {
              console.log(context);
              context.height += 100;
            },
            grid: {
              drawTicks: false,
            },
          },
          y: {
            afterFit: (context) => {
              console.log(context);
              context.width += myChart.chartArea.left;
            },
            grid: {
              drawTicks: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
    // const scrollBoxBody = document.querySelector('.scrollBoxBody');
    // if(myChart.data.labels.length>7){
    // const newHeight=300+((myChart.data.labels?.length - 7)*20);
    // scrollBoxBody?.computedStyleMap.height=`${newHeight}px`
    // }
    const scrollBoxBody = document.querySelector('.scrollBoxBody') as HTMLElement;

    if (scrollBoxBody) {   //dynamic depends on the length of labels-------------if length is > 7
      let newHeight = 300 + 13 * 20; // 300+(lables.length-7)*20------- can be adjust according to UI.
      scrollBoxBody.style.height = `${newHeight}px`; //set the height of the chart virticaly.
    }

  }
}
