<template>
  <ul class="header__socials">
    <li class="header__socials-item">
      <a target="_blank" :href="option.facebook_url">
        <img
          v-if="option.facebook_image"
          :src="`${site_url}${option.facebook_image.data.attributes.url}`"
          alt=""
        />
      </a>
    </li>
    <li class="header__socials-item">
      <a target="_blank" :href="option.instagram_url">
        <img
          v-if="option.instagram_image"
          :src="`${site_url}${option.instagram_image.data.attributes.url}`"
          alt=""
        />
      </a>
    </li>
    <li class="header__socials-item">
      <a target="_blank" :href="option.linkedin_url">
        <img
          v-if="option.linkedin_image"
          :src="`${site_url}${option.linkedin_image.data.attributes.url}`"
          alt=""
        />
      </a>
    </li>
    <li class="header__socials-item">
      <a target="_blank" :href="option.youtube_url">
        <img
          v-if="option.youtube_image"
          :src="`${site_url}${option.youtube_image.data.attributes.url}`"
          alt=""
        />
      </a>
    </li>
    <li class="header__socials-item">
      <a target="_blank" :href="option.whatsup_url">
        <img
          v-if="option.whatsup_image"
          :src="`${site_url}${option.whatsup_image.data.attributes.url}`"
          alt=""
        />
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      site_url: process.env.siteUrl,
    };
  },
};
</script>
