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
    const home = await store.state.home.home;
    console.log(home, "home");
    return {
      home: home,
    };
  },
  components: {
    HomeIntro,
  },
  created() {
    this.$store.dispatch("home/fetchHome");
  },
};
</script>
