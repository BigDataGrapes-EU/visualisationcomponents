import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
* `bar-chart`
* A barchart visualisation
*
* @customElement
* @polymer
* @demo demo/index.html
*/
class HeatMap extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" />
    <!-- FIXME: Figure out Shadow DOM so this doesn't have to be included here -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.3.0/dist/MarkerCluster.css" media="screen">
    <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.3.0/dist/MarkerCluster.Default.css" media="screen">

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
      #mapid { height: 280px; }
    </style>
    <div class="card">
      <div class="top">
        <h1 class="title">[[title]]</h1>
        <h2 class="subtitle">[[subtitle]]</h2>
      </div>
      <div class="mid">
        <div id="mapid"></div>
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
        value: 'This is a Map',
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
    var mymap = L.map(this.shadowRoot.querySelector("#mapid")).setView([51.505, -0.09], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiZnJhbmNpc2NvZ2h6IiwiYSI6ImNpbnV1Z3J4eTAwb3R2c2tscXgwMWs2eHEifQ.OrlG9so4YihIM4ccw59cHw'
    }).addTo(mymap);

    var polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(mymap);
  }

}

window.customElements.define('vis-map', HeatMap);
