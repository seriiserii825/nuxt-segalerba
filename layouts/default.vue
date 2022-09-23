<template>
  <div class="wrapper">
    <MainHeader />
    <nuxt />
  </div>
</template>
<script>
import MainHeader from "~/components/navigation/MainHeader.vue";
export default {
  data() {
    return {
      option: {},
    };
  },
  components: {
    MainHeader,
  },
  mounted() {
    this.option = this.$store.getters.getOption;
    console.log(this.option, "this.option");
    console.log(this.$store.getters.getSome, "this.$store.getters.getSome");
  },
};
</script>
