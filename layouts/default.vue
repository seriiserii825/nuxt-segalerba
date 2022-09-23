<template>
  <div class="wrapper">
    <MainHeader :option="option" />
    <nuxt />
  </div>
</template>
<script>
import MainHeader from "~/components/navigation/MainHeader.vue";
export default {
  components: {
    MainHeader,
  },
  computed: {
    option() {
      return this.$store.state.option;
    },
  },
  created(){
    this.$store.dispatch('fetchOption');
  }
};
</script>
