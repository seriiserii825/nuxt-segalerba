<template>
  <footer class="main-footer wow fadeIn">
    <div class="container">
      <div class="main-footer__wrap">
        <Form/>
        <Contacts v-if="Object.keys(option).length > 0" :option="option"/>
      </div>
    </div>
    <div id="map-wrap" style="height: 58rem">
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
            <span v-if="option.full_company_name">Copyright 2022 {{ option.full_company_name }}</span>
            <br/>
            Partita Iva : <span v-if="option.vat">{{ option.vat }}</span>. Tutti i diritti riservati.
            <nuxt-link target="_blank" to="/privacy-policy">Privacy and Cookie policy.</nuxt-link>
          </div>
          <div class="partner">
            <div class="partner__text" v-if="option.partner_text" v-html="option.partner_text"></div>
            <a
                v-if="option.partner_image"
                target="_blank" :href="option.partner__url">
              <img :src="`${site_url}${option.partner_image.data.attributes.url}`" alt=""/>
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
  data() {
    return {
      site_url: process.env.siteUrl,
    }
  },
  components: {Contacts, Form},
  created() {
    // console.log(Object.keys(this.option).length > 0, 'Object.keys(this.option)');
  }
};
</script>
