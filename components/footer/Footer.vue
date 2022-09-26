<template>
  <footer class="main-footer wow fadeIn">
    <div class="container">
      <div class="main-footer__wrap">
        <Form/>
        <Contacts v-if="Object.keys(option).length > 0" :option="option"/>
      </div>
    </div>
    <div id="map-wrap" style="height: 100vh">
      <client-only>
        <l-map :zoom=17 :center="[44.414274, 8.92939]">
          <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker :lat-lng="[44.414274, 8.92939]"></l-marker>
        </l-map>
      </client-only>
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
