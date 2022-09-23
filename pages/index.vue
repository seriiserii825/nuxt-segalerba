<template>
  <div>
    <HomeIntro
      v-if="home && home.data"
      :home_intro="home.data.attributes.home_intro"
    />
  </div>
</template>

<script>
import HomeIntro from "@/components/home/HomeIntro.vue";
export default {
  name: "IndexPage",
  layout: "default",
  async asyncData({ store }) {
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
    HomeIntro,
  },
};
</script>
