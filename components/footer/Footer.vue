<template>
  <footer class="main-footer wow fadeIn">
    <div class="container">
      <div class="main-footer__wrap">
        <Form/>
        <Contacts v-if="Object.keys(option).length > 0" :option="option"/>
      </div>
    </div>
    <div
        class="map leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
        id="js-map"
        tabindex="0"
        style="position: relative"
    >
      <div
          class="leaflet-pane leaflet-map-pane"
          style="transform: translate3d(0px, 0px, 0px)"
      >
        <div class="leaflet-pane leaflet-tile-pane">
          <div class="leaflet-layer" style="z-index: 1; opacity: 1">
            <div
                class="leaflet-tile-container leaflet-zoom-animated"
                style="
                z-index: 23;
                transform: translate3d(-720px, -258px, 0px) scale(2);
              "
            ></div>
            <div
                class="leaflet-tile-container leaflet-zoom-animated"
                style="
                z-index: 24;
                transform: translate3d(-720px, -258px, 0px) scale(1);
              "
            >
              <img
                  alt=""
                  role="presentation"
                  src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/15/17197/11861?access_token=pk.eyJ1IjoiYmx1ZGVsZWdvIiwiYSI6ImNrdjJkM3EwZzBiZzkydXMzbTZ1d3I3YnEifQ.UcO5wDKFiFDPQ6M8U7-byg"
                  class="leaflet-tile leaflet-tile-loaded"
                  style="
                  width: 512px;
                  height: 512px;
                  transform: translate3d(1072px, 8px, 0px);
                  opacity: 1;
                "
              /><img
                alt=""
                role="presentation"
                src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/15/17198/11861?access_token=pk.eyJ1IjoiYmx1ZGVsZWdvIiwiYSI6ImNrdjJkM3EwZzBiZzkydXMzbTZ1d3I3YnEifQ.UcO5wDKFiFDPQ6M8U7-byg"
                class="leaflet-tile leaflet-tile-loaded"
                style="
                  width: 512px;
                  height: 512px;
                  transform: translate3d(1584px, 8px, 0px);
                  opacity: 1;
                "
            /><img
                alt=""
                role="presentation"
                src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/15/17197/11862?access_token=pk.eyJ1IjoiYmx1ZGVsZWdvIiwiYSI6ImNrdjJkM3EwZzBiZzkydXMzbTZ1d3I3YnEifQ.UcO5wDKFiFDPQ6M8U7-byg"
                class="leaflet-tile leaflet-tile-loaded"
                style="
                  width: 512px;
                  height: 512px;
                  transform: translate3d(1072px, 520px, 0px);
                  opacity: 1;
                "
            /><img
                alt=""
                role="presentation"
                src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/15/17198/11862?access_token=pk.eyJ1IjoiYmx1ZGVsZWdvIiwiYSI6ImNrdjJkM3EwZzBiZzkydXMzbTZ1d3I3YnEifQ.UcO5wDKFiFDPQ6M8U7-byg"
                class="leaflet-tile leaflet-tile-loaded"
                style="
                  width: 512px;
                  height: 512px;
                  transform: translate3d(1584px, 520px, 0px);
                  opacity: 1;
                "
            /><img
                alt=""
                role="presentation"
                src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/15/17196/11861?access_token=pk.eyJ1IjoiYmx1ZGVsZWdvIiwiYSI6ImNrdjJkM3EwZzBiZzkydXMzbTZ1d3I3YnEifQ.UcO5wDKFiFDPQ6M8U7-byg"
                class="leaflet-tile leaflet-tile-loaded"
                style="
                  width: 512px;
                  height: 512px;
                  transform: translate3d(560px, 8px, 0px);
                  opacity: 1;
                "
            /><img
                alt=""
                role="presentation"
                src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/15/17199/11861?access_token=pk.eyJ1IjoiYmx1ZGVsZWdvIiwiYSI6ImNrdjJkM3EwZzBiZzkydXMzbTZ1d3I3YnEifQ.UcO5wDKFiFDPQ6M8U7-byg"
                class="leaflet-tile leaflet-tile-loaded"
                style="
                  width: 512px;
                  height: 512px;
                  transform: translate3d(2096px, 8px, 0px);
                  opacity: 1;
                "
            /><img
                alt=""
                role="presentation"
                src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/15/17196/11862?access_token=pk.eyJ1IjoiYmx1ZGVsZWdvIiwiYSI6ImNrdjJkM3EwZzBiZzkydXMzbTZ1d3I3YnEifQ.UcO5wDKFiFDPQ6M8U7-byg"
                class="leaflet-tile leaflet-tile-loaded"
                style="
                  width: 512px;
                  height: 512px;
                  transform: translate3d(560px, 520px, 0px);
                  opacity: 1;
                "
            /><img
                alt=""
                role="presentation"
                src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/15/17199/11862?access_token=pk.eyJ1IjoiYmx1ZGVsZWdvIiwiYSI6ImNrdjJkM3EwZzBiZzkydXMzbTZ1d3I3YnEifQ.UcO5wDKFiFDPQ6M8U7-byg"
                class="leaflet-tile leaflet-tile-loaded"
                style="
                  width: 512px;
                  height: 512px;
                  transform: translate3d(2096px, 520px, 0px);
                  opacity: 1;
                "
            />
            </div>
          </div>
        </div>
        <div class="leaflet-pane leaflet-shadow-pane"></div>
        <div class="leaflet-pane leaflet-overlay-pane"></div>
        <div class="leaflet-pane leaflet-marker-pane">
          <img
              src="/wp-content/themes/ar-remaxclass/assets/i/static/map-icon.png"
              class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
              alt=""
              tabindex="0"
              style="
              margin-left: -38px;
              margin-top: -38px;
              width: 38px;
              height: 38px;
              transform: translate3d(236px, 511px, 0px);
              z-index: 511;
            "
          />
        </div>
        <div class="leaflet-pane leaflet-tooltip-pane"></div>
        <div class="leaflet-pane leaflet-popup-pane"></div>
        <div
            class="leaflet-proxy leaflet-zoom-animated"
            style="
            transform: translate3d(8.80522e6px, 6.07337e6px, 0px) scale(32768);
          "
        ></div>
      </div>
      <div class="leaflet-control-container">
        <div class="leaflet-top leaflet-left">
          <div class="leaflet-control-zoom leaflet-bar leaflet-control">
            <a
                class="leaflet-control-zoom-in"
                href="#"
                title="Zoom in"
                role="button"
                aria-label="Zoom in"
            >+</a
            ><a
              class="leaflet-control-zoom-out"
              href="#"
              title="Zoom out"
              role="button"
              aria-label="Zoom out"
          >−</a
          >
          </div>
        </div>
        <div class="leaflet-top leaflet-right"></div>
        <div class="leaflet-bottom leaflet-left"></div>
        <div class="leaflet-bottom leaflet-right">
          <div class="leaflet-control-attribution leaflet-control">
            <a
                href="https://leafletjs.com"
                title="A JS library for interactive maps"
            >Leaflet</a
            >
            | Map data ©
            <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
            contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>
          </div>
        </div>
      </div>
    </div>
    <div class="main-footer__down">
      <div class="container">
        <div class="main-footer__down-wrap">
          <div class="copyright">
            Copyright 2021 IMMOBILIARE SEGALERBA SNC DI FABRIZIO SEGALERBA E C.
            <br/>
            Partita Iva : 01433580998. Tutti i diritti riservati.
            <a target="_blank" href="/privacy-policy/"
            >Privacy and Cookie policy.</a
            >
          </div>
          <div class="partner">
            <div class="partner__text">
              Immobiliare Segalerba<br/>
              ha scelto
            </div>
            <a target="_blank" href="https://www.altuofianco.it/">
              <img
                  src="https://immobiliaresegalerba.it/wp-content/uploads/2021/06/altuofianco.svg"
                  alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import Form from "./Form";
import Contacts from "./Contacts";

export default {
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      },
    }
  },
  components: {Contacts, Form},
  created() {
    // console.log(Object.keys(this.option).length > 0, 'Object.keys(this.option)');
  }
};
</script>
