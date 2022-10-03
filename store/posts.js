export const state = () => ({
  posts: [],
});

export const mutations = {
  getLastPosts(state, payload) {
    state.posts = payload;
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
};
