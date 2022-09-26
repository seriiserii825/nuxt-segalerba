<template>
  <div class="services">
    <article class="services__item" v-for="item in servizi_items" :key="item.id">
      <div class="services__img">
        <picture>
          <img class="" :src="`${site_url}${item.image.data.attributes.url}`" alt="">
        </picture>
      </div>
      <div class="services__content">
        <h2 class="services__item-title custom-title">{{ item.title }}</h2>
        <div class="services__item-text" v-html="item.text"></div>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  name: "ServiziItems",
  props: {
    servizi_items: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      site_url: process.env.siteUrl,
    }
  },
}
</script>
<style lang="scss">
</style>
