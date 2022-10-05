<template>
  <div>
    <PageIntro v-if="contatti.page_intro" :page_intro="contatti.page_intro"/>
  </div>
</template>
<script>
import PageIntro from "../components/global/PageIntro";

export default {
  layout: 'default',
  async asyncData({store}) {
    let contatti = null;

    if (!store.state.contatti.contatti) {
      await store.dispatch("contatti/fetchData");
      contatti = store.state.contatti.contatti;
    }
    contatti = store.state.contatti.contatti.data.attributes;

    return {
      contatti: contatti,
    };
  },
  head() {
    return {
      title: this.contatti.seo.title,
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "immobili",
        },
        {
          hid: "description",
          name: "description",
          content: this.contatti.seo.text,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.contatti.seo.title,
        },
        // {
        //   hid: "og:image",
        //   property: "og:image",
        //   content: `${process.env.siteUrl}${this.contatti.seo.image.data.attributes.url}`,
        // },
        {
          hid: "og:description",
          property: "og:description",
          content: this.contatti.seo.text,
        },
      ],
    };
  },
  data() {
    return {
      site_url: process.env.siteUrl,
    }
  },
  components: {PageIntro}
}
</script>
