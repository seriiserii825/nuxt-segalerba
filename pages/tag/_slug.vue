<template>
  <div class="page-blog">
    <PageIntro v-if="blog.page_intro" :page_intro="blog.page_intro" />
    <div class="site-bg site-bg--padding">
      <h2 class="page-blog__title custom-title" v-if="blog.title">
        {{ blog.title }}
      </h2>
      <div class="page-blog__text" v-if="blog.text">{{ blog.text }}</div>
      <PostItem v-for="post in posts" :key="post.id" :post="post.attributes" />
    </div>
  </div>
</template>
<script>
import PageIntro from "../../components/global/PageIntro";
import PostItem from "../../components/posts/PostItem";

export default {
  name: "Tag",
  components: { PostItem, PageIntro },
  layout: "default",
  async asyncData({ store, params }) {
    let blog = null;

    if (!store.state.blog.blog) {
      await store.dispatch("blog/fetchBlog");
      blog = store.state.blog.blog;
    }
    blog = store.state.blog.blog;

    await store.dispatch("posts/fetchPostsByTag", { slug: params.slug });
    const posts = store.state.posts.posts_by_tag;
    console.log(posts, "posts");

    return {
      blog: blog.data.attributes,
      posts: posts.data,
    };
  },
  data() {
    return {
      site_url: process.env.siteUrl,
    };
  },
};
</script>
