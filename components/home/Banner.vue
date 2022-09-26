<template>
  <div class="banner">
    <picture>
      <img
          :src="`${site_url}${banner.image.data.attributes.url}`"
          alt=""
      />
    </picture>

    <div class="container-small">
      <h2 class="banner__title">{{ banner.title }}</h2>
      <div class="banner__text" v-html="banner.text"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    banner: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      site_url: process.env.siteUrl,
    }
  },
}
;
</script>
