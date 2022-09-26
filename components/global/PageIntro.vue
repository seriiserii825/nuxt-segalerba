<template>
  <div class="page-intro ">
    <picture>
      <img class="page-intro__img " :src="`${site_url}${page_intro.image.data.attributes.url}`" alt="">
    </picture>
    <div class="container">
      <h1 class="page-intro__title">{{ page_intro.title }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageIntro',
  props: {
    page_intro: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      site_url: process.env.siteUrl
    }
  },
}
</script>
<style lang="scss">
</style>
