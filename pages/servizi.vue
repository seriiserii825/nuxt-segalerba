<template>
  <div>
    <PageIntro v-if="servizi.page_intro" :page_intro="servizi.page_intro" />
    <div class="page-services">
      <div class="container">
        <div class="site-bg">
          <ServiziItems :servizi_items="servizi.servizi_items" />
          <div class="services-body">
            <div class="services-body__content">
              <h2 class="custom-title">{{ servizi.Title }}</h2>
              <div v-html="servizi.text"></div>
            </div>
            <div class="services-body__img">
              <picture>
                <img
                  class=""
                  :src="`${site_url}${servizi.image.data.attributes.url}`"
                  alt=""
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageIntro from "../components/global/PageIntro";
import ServiziItems from "../components/servizi/ServiziItems";

export default {
  components: { ServiziItems, PageIntro },
  layout: "default",
  head() {
    return {
      title: this.servizi.seo.title,
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "immobili",
        },
        {
          hid: "description",
          name: "description",
          content: this.servizi.seo.text,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.servizi.seo.title,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `${process.env.siteUrl}${this.servizi.seo.image.data.attributes.url}`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.servizi.seo.text,
        },
      ],
    };
  },
  async asyncData({ store }) {
    let servizi = null;

    if (!store.state.servizi.servizi) {
      await store.dispatch("servizi/fetchServizi");
      servizi = store.state.servizi.servizi;
    }
    servizi = store.state.servizi.servizi.data.attributes;

    return {
      servizi: servizi,
    };
  },
  data() {
    return {
      site_url: process.env.siteUrl,
    };
  },
};
</script>
