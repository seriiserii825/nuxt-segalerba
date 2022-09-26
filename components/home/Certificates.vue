<template>
  <div class="certificates">
    <div class="container-small">
      <div class="certificates__wrap">
        <div class="certificates__item" v-for="certificate in certificates" :key="certificate.id">
          <header class="certificates__header">
            <div class="certificates__logo">
              <img :src="`${site_url}${certificate.image.data.attributes.url}`" alt="">
            </div>
            <h2 class="certificates_title" v-html="certificate.title"></h2>
          </header>
          <div class="certificates_text" v-html="certificate.text"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Certificates',
  props: {
    certificates: {
      type: Array,
      default: () => []
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
