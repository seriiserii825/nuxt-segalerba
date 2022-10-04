export const state = () => ({
  posts: [],
  post: {},
  posts_by_tag: [],
});

export const mutations = {
  getLastPosts(state, payload) {
    state.posts = payload;
  },
  getPost(state, payload) {
    state.post = payload;
  },
  getPostsByTag(state, payload) {
    state.posts_by_tag = payload;
  },
};

export const actions = {
  async fetchPosts({ commit }) {
    const qs = require("qs");
    const query = qs.stringify(
      {
        populate: {
          post_tags: {
            fields: ["title", "slug"],
          },
          image: {
            fields: ["url"],
          },
        },
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );
    const { data } = await this.$axios.get("/posts?" + query);
    commit("getLastPosts", data);
  },
  async fetchPostsByTag({ commit }, payload) {
    const qs = require("qs");
    const query = qs.stringify(
      {
        filters: {
          post_tags: {
            slug: payload.slug,
          },
        },
        populate: {
          post_tags: {
            fields: ["title", "slug"],
          },
          image: {
            fields: ["url"],
          },
        },
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );
    const { data } = await this.$axios.get("/posts?" + query);
    commit("getPostsByTag", data);
  },
  async fetchPost({ commit }, payload) {
    const qs = require("qs");
    const query = qs.stringify(
      {
        filters: {
          slug: {
            $eq: payload.slug,
          },
        },
        populate: {
          author: {
            populate: "*",
          },
          post_tags: {
            fields: ["title", "slug"],
          },
          image: {
            fields: ["url"],
          },
        },
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );
    const { data } = await this.$axios.get("/posts?" + query);
    commit("getPost", data);
  },
};
