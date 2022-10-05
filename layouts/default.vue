<template>
  <div class="wrapper">
    <MainHeader v-if="option" :option="option" />
    <nuxt />
    <Footer v-if="option" :option="option" />
  </div>
</template>
<script>
import MainHeader from "~/components/navigation/MainHeader.vue";
import Footer from "../components/footer/Footer";

export default {
  head() {
    return {
      meta: [
        {
          hid: "og:url",
          property: "og:url",
          content: `${process.env.current_url}${this.$route.path}`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `${process.env.siteUrl}${
            this.option.og_image ? this.option.og_image.data.attributes.url : ""
          }`,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: `${process.env.current_url}${this.$route.path}`,
        },
      ],
    };
  },
  components: {
    Footer,
    MainHeader,
  },
  computed: {
    option() {
      return this.$store.state.option;
    },
  },
  created() {
    this.$store.dispatch("fetchOption");
  },
};
</script>
