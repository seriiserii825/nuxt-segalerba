<template>
  <div class="blog">
    <div class="container-small">
      <div class="blog__header">
        <h2 class="blog__title">{{ latest_posts.title }}</h2>
        <nuxt-link class="link-arrow" to="/blog">
          <span>{{ latest_posts.button_text }}</span>
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14" cy="14.7891" r="14" fill="#FF8D00"></circle>
            <path
              d="M12 9.78906L17 15.2891L12 20.7891"
              stroke="white"
              stroke-width="2"
            ></path>
          </svg>
        </nuxt-link>
      </div>
      <div class="blog__wrap" v-if="items.length > 0">
        <div class="blog__item" v-for="item in items" :key="item.id">
          <nuxt-link :to="`/blog/${item.attributes.slug}`" class="blog__img">
            <img
              :src="`${site_url}${item.attributes.image.data.attributes.url}`"
              alt=""
              width="372"
              height="246"
            />
          </nuxt-link>
          <div class="blog__data"><strong>mercato immobiliare</strong></div>
          <h3 class="blog__item-title">
            <nuxt-link :to="`/blog/${item.attributes.slug}`">{{ item.attributes.title }}</nuxt-link>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Blog",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    latest_posts: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      site_url: process.env.siteUrl,
    };
  },
  created() {
    // console.log(this.items, "this.items");
  },
};
</script>
<style lang="scss">
</style>
