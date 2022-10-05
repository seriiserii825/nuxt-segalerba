<template>
  <div class="single-article">
    <div class="page-intro">
      <img
        :src="`${site_url}${blog.page_intro.image.data.attributes.url}`"
        alt=""
      />
      <div class="container">
        <h1 class="page-intro__title" v-if="post.title">{{ post.title }}</h1>
      </div>
    </div>
    <div class="container">
      <div class="site-bg site-bg--padding">
        <ul class="breadcrumbs">
          <li>
            <nuxt-link to="/blog">Blog</nuxt-link>
          </li>
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 0.5L5 4L1 8"
              stroke="#555555"
              stroke-linecap="round"
            ></path>
            <path
              d="M4 0.5L8 4L4 8"
              stroke="#555555"
              stroke-linecap="round"
            ></path>
          </svg>
          <li v-if="post.title">
            <span>{{ post.title }}</span>
          </li>
        </ul>
        <div
          class="single-article__img"
          v-if="post.image && post.image.data.attributes.url"
        >
          <img
            width="1200"
            height="628"
            :src="`${site_url}${post.image.data.attributes.url}`"
            class="attachment-full size-full wp-post-image"
            alt="mercato immobiliare"
          />
        </div>
        <div class="single-article__content">
          <div v-if="post.text" v-html="post.text"></div>
          <ul
            class="single-article__tags"
            v-if="post.post_tags && post.post_tags.data.length > 0"
          >
            <li><span>TAGS:</span></li>
            <li v-for="tag in post.post_tags.data" :key="tag.id">
              <nuxt-link
                :to="`/tag/${tag.attributes.slug}`"
                :title="tag.attributes.title"
                class="mercato-immobiliare"
              >
                {{ tag.attributes.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="single-author">
          <div class="single-author__img">
            <img
              v-if="post.author && post.author.data.attributes.image"
              :src="`${site_url}${post.author.data.attributes.image.data.attributes.url}`"
              alt=""
            />
          </div>
          <div
            class="single-author__text"
            v-if="post.author && post.author.data.attributes.text"
          >
            {{ post.author.data.attributes.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Blog",
  head() {
    return {
      title: this.post.seo.title,
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "immobili",
        },
        {
          hid: "description",
          name: "description",
          content: this.post.seo.text,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.post.seo.title,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `${process.env.siteUrl}${this.post.image.data.attributes.url}`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.post.seo.text,
        },
      ],
    };
  },
  async asyncData({ store, params }) {
    let blog = null;

    if (!store.state.blog.blog) {
      await store.dispatch("blog/fetchBlog");
      blog = store.state.blog.blog;
    }
    blog = store.state.blog.blog;

    await store.dispatch("posts/fetchPost", { slug: params.slug });
    const post = store.state.posts.post.data[0].attributes;

    return {
      blog: blog.data.attributes,
      post: post,
    };
  },
  data() {
    return {
      site_url: process.env.siteUrl,
    };
  },
};
</script>
<style lang="scss">
</style>
