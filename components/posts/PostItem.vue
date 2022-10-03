<template>
  <div class="blog-loop">
    <div class="blog-loop__img">
      <nuxt-link :to="postUrl">
        <img width="1200" height="628"
             :src="`${site_url}${post.image.data.attributes.url}`"
             class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
             alt="Genova: bilancio immobiliare del primo semestre 2022" loading="lazy"
        ></nuxt-link>
    </div>
    <div class="blog-loop__content">
      <header class="blog-loop__header">
        <div class="blog-loop__time">{{ formatDate(post.createdAt) }}</div>
        <span> In </span>
        <div class="blog-loop__category">{{ tag(post) }}</div>
      </header>
      <h2 class="blog-loop__title custom-title">
        <nuxt-link :to="postUrl">{{ post.title }}</nuxt-link>
      </h2>
      <nuxt-link :to="postUrl" class="blog-loop__link">
        <span>Approfondisci</span>
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M6.64014 5.59299L5.97509 4.92795L1.45503 0.407898L0.119039 1.738L3.97403 5.59299L0.119039 9.44798L1.45503 10.7781L5.97509 6.25804L6.64014 5.59299Z"
              fill="#FF8D00"></path>
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      site_url: process.env.siteUrl,
    };
  },
  computed: {
    postUrl() {
      return `/blog/${this.post.slug}`;
    },
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString("it-IT", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    tag(post) {
      return post.post_tags.data[0].attributes.title;
    }
  }
}
</script>
<style lang="scss">
</style>
