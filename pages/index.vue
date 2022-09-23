<template>
  <div>
    <HomeIntro />
  </div>
</template>

<script>
import HomeIntro from "@/components/home/HomeIntro.vue";
export default {
  name: "IndexPage",
  layout: "default",
  components: {
    HomeIntro,
  },
};
</script>
