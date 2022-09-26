<template>
  <div class="wrapper">
    <MainHeader :option="option"/>
    <nuxt/>
    <Footer/>
  </div>
</template>
<script>
import MainHeader from "~/components/navigation/MainHeader.vue";
import Footer from "../components/footer/Footer";

export default {
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
    this.$store.dispatch('fetchOption');
  }
};
</script>
