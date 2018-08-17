import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

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
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'bar-chart',
      },
    };
  }
}

window.customElements.define('bar-chart', BarChart);
