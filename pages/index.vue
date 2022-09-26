<template>
  <div v-if="home && home.data">
    <HomeIntro :home_intro="home.data.attributes.home_intro"/>
    <div class="container">
      <Features :features="home.data.attributes.features"/>
      <Banner :banner="home.data.attributes.banner"/>
      <About :about="home.data.attributes.about"/>
      <Certificates :certificates="home.data.attributes.certificates"/>
    </div>
  </div>
</template>

<script>
import HomeIntro from "@/components/home/HomeIntro.vue";
import Features from "@/components/home/Features.vue";
import Banner from "../components/home/Banner";
import About from "../components/home/About";
import Certificates from "../components/home/Certificates";

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
    Certificates,
    About,
    Banner,
    HomeIntro,
    Features,
  },
};
</script>
