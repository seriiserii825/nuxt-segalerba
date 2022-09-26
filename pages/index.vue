<template>
  <div v-if="home && home.data">
    <HomeIntro :home_intro="home.data.attributes.home_intro"/>
    <div class="container">
      <Features :features="home.data.attributes.features"/>
      <Banner :banner="home.data.attributes.banner" />
    </div>
  </div>
</template>

<script>
import HomeIntro from "@/components/home/HomeIntro.vue";
import Features from "@/components/home/Features.vue";
import Banner from "../components/home/Banner";

export default {
  name: "IndexPage",
  layout: "default",
  async asyncData({store}) {
    let home = null;

    if (!store.state.home.home) {
      await store.dispatch("home/fetchHome");
      home = store.state.home.home;
    }
    home = store.state.home.home;

    return {
      home: home,
    };
  },
  components: {
    Banner,
    HomeIntro,
    Features,
  },
};
</script>
