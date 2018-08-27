import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js'

/**
* `histogram`
* A barchart visualisation
*
* @customElement
* @polymer
* @demo demo/index.html
*/
class Histogram extends PolymerElement {
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
        value: 'This is a simple histogram',
      },
      subtitle: {
        type: String,
        value: 'A reusable visualisation component',
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
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [{
          data: [3, 6, 8, 9, 7, 4],
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

window.customElements.define('vis-histogram', Histogram);
