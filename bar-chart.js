import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js'

/**
* `bar-chart`
* A barchart visualisation
*
* @customElement
* @polymer
* @demo demo/index.html
*/
class BarChart extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
      }
      .top{
        margin-bottom: 20px;
      }
      .card {
        border: 1px solid #f1f1f1;
        height: 400px;
        width: 400px;
        border-radius: 5px;
        padding: 20px;
        box-shadow: 0px 0px 8px #888888;
        background: white;
      }
      h1 {
        font-family: Roboto, Arial, sans-serif;
        font-weight: 100;
        font-size: 24px;
        margin: 0;
        padding: 0;
        color: #424242;
      }
      h2 {
        font-family: Roboto, Arial, sans-serif;
        font-weight: 600;
        font-size: 14px;
        margin:  0;
        padding: 0;
        color: #a1a1a1
      }
    </style>
    <div class="card">
      <div class="top">
        <h1 class="title">[[title]]</h1>
        <h2 class="subtitle">[[subtitle]]</h2>
      </div>
      <div class="mid">
        <canvas class="myChart"></canvas>
      </div>
      <div class="bottom"></div>
    </div>
    `;
  }
  static get properties() {
    return {
      height: {
        type: Number,
        value: '200',
      },
      width: {
        type: Number,
        value: '400',
      },
      title: {
        type: String,
        value: 'This is a simple bar-chart',
      },
      subtitle: {
        type: String,
        value: 'A reusable bar-chart component',
      },
      data: {
        type: Array,
        value: function() {
          return [];
        },
        //observer: '_dataChanged'
      }
    };
  }

  ready() {
    super.ready();
    var ctx = this.shadowRoot.querySelector("canvas").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          data: [6, 9, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ]
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }

}

window.customElements.define('vis-barchart', BarChart);
