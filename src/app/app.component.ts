import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

Chart.defaults.datasets.bar.maxBarThickness = 73;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lab-angular';

  // renderData(): number[] {
  //   let array: number[] = [];
  //   for (let i = 0; i < 12; i++) {
  //     array.push(Math.floor(Math.random() * 11));
  //   }
  //   console.log(array);
  //   return array;
  // }

  // ngOnInit() {
  //   new Chart('myChart', {
  //     type: 'bar',
  //     data: {
  //       labels: [
  //         'January',
  //         'February',
  //         'March',
  //         'April',
  //         'May',
  //         'June',
  //         'July',
  //         'August',
  //         'September',
  //         'October',
  //         'November',
  //         'December',
  //       ],
  //       datasets: [
  //         {
  //           xAxisID: 'x', // Use xAxisID instead of yAxisID
  //           label: 'US',
  //           data: this.renderData(),
  //           backgroundColor: ['#3E6D9C'],
  //         },
  //         {
  //           xAxisID: 'x', // Use xAxisID instead of yAxisID
  //           label: 'SS',
  //           data: this.renderData(),
  //           backgroundColor: ['#03C988'],
  //         },
  //         {
  //           xAxisID: 'x', // Use xAxisID instead of yAxisID
  //           label: 'PU',
  //           data: this.renderData(),
  //           backgroundColor: ['#17594A'],
  //         },
  //         {
  //           xAxisID: 'x', // Use xAxisID instead of yAxisID
  //           label: 'DP',
  //           data: this.renderData(),
  //           backgroundColor: ['gray'],
  //         },
  //       ],
  //     },
  //     options: {
  //       indexAxis: 'y',
  //     },
  //   });
  
  // }
}
