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
    new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'US',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['#3E6D9C'],
          },
          {
            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'SS',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['#03C988'],
          },
          {
            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'PU',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['#17594A'],
          },
          {
            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'DP',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['gray'],
          },
        ],
      },
      options: {
        indexAxis: 'y',
        scales:{
          x:{
            beginAtZero:true,
            grid:{
              drawTicks:false
            },
            ticks:{
              display:false
            }
          }
        }
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
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['#3E6D9C'],
          },
          {
            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'SS',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['#03C988'],
          },
          {
            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'PU',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['#17594A'],
          },
          {
            xAxisID: 'x', // Use xAxisID instead of yAxisID
            label: 'DP',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['gray'],
          },
        ],
      },
      options: {
        indexAxis: 'y',
        plugins:{
          legend:{
            display:false
          }
        }
      },
      
    });
  }
}
