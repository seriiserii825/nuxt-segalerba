<template>
  <div v-if="home && home.data">
    <HomeIntro :home_intro="home.data.attributes.home_intro"/>
    <div class="container">
      <Features :features="home.data.attributes.features"/>
      <Banner :banner="home.data.attributes.banner"/>
      <About :about="home.data.attributes.about"/>
      <Certificates :certificates="home.data.attributes.certificates"/>
      <Blog
          :items="latest_posts_items"
          :latest_posts="home.data.attributes.latest_posts"
      />
    </div>
  </div>
</template>

<script>
import HomeIntro from "@/components/home/HomeIntro.vue";
import Features from "@/components/home/Features.vue";
import Banner from "../components/home/Banner";
import About from "../components/home/About";
import Certificates from "../components/home/Certificates";
import Blog from "../components/home/Blog";

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

    let latest_posts_ids =
        home.data.attributes.latest_posts.posts_ids.split(",");
    latest_posts_ids = latest_posts_ids.map(item => Number(item));

    await store.dispatch("last_posts/fetchLastPosts", latest_posts_ids);

    const latest_posts_items = store.state.last_posts.last_posts;

    return {
      home: home,
      latest_posts_items: latest_posts_items.data,
    };
  },
  components: {
    Certificates,
    About,
    Banner,
    HomeIntro,
    Features,
    Blog,
  },
};
</script>
