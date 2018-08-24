import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import Chart from 'chart.js'

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
    </style>
    Width: [[width]]!
    Height: [[height]]!
    <div>
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
      data: {
        type: Array,
        value: function() {
          return [];
        },
        //observer: '_dataChanged'
      }
    };
  }
}

window.customElements.define('bar-chart', BarChart);
