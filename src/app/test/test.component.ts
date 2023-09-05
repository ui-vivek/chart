import { flush } from '@angular/core/testing';
import { Chart } from 'chart.js/auto';
import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

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
          'February',
          'March',
          'April',
          'May',
          'January',
          'February',
          'March',
          'April',
          'May',
        ],
        datasets: [
          {
            // categoryPercentage: 0.4,
            // barPercentage:0.4,
            barPercentage:0.4,
            categoryPercentage:0.7,

            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'US',
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['#3E6D9C'],
          },
          {
            // categoryPercentage: 0.4,
            // barPercentage:1,
            barPercentage:0.4,
            categoryPercentage:0.7,


            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'SS',
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['#03C988'],
          },
          {
            // categoryPercentage: 0.4,
            // barPercentage:0.9,
            barPercentage:0.4,
            categoryPercentage:0.7,



            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'PU',
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['#17594A'],
          },
          {
            // categoryPercentage: 0.4,
            // barPercentage:0.9,
            barPercentage:0.4,
            categoryPercentage:0.7,

            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'DP',
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['gray'],
          },
        ],
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        layout: {
          padding: {
            // right: 0,
          },
        },
        scales: {
          x: {
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
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['#3E6D9C'],
          },
          {
            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'SS',
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['#03C988'],
          },
          {
            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'PU',
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['#17594A'],
          },
          {
            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'DP',
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
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
            afterFit: (context) => {
              console.log(context);
              context.height += 30;
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
    const scrollBoxBody = document.querySelector('.scrollBoxBody');
    // if(myChart.data.labels.length>7){
    //   const newHeight=300+((myChart.data.labels?.length - 7)*20);
    //   scrollBoxBody?.computedStyleMap.height=`${newHeight}px`
    // }
    // let zz=myChart.scales['y-axis-0'].height + myChart.scales['y-axis-0'].top + 10;
  }
}
