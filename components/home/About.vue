<template>
  <div class="about">
    <div class="about__img">
      <img :src="`${site_url}${about.image.data.attributes.url}`" alt="">
    </div>
    <div class="about__content">
      <h2 class="about__title">{{ about.title }}</h2>
      <div class="about__text" v-html="about.text"></div>
      <div class="about__footer">
        <nuxt-link class="link-arrow" :to="`${about.button_url}`"><span>{{ about.button_text }}</span>
          <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14.7891" r="14" fill="#FF8D00"></circle>
            <path d="M12 9.78906L17 15.2891L12 20.7891" stroke="white" stroke-width="2"></path>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    about: {
      type: Object,
      default: null,
    },
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

