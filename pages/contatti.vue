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
  data() {
    return {
      site_url: process.env.siteUrl,
    }
  },
  components: {PageIntro}
}
</script>
