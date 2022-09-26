export const state = () => ({
  last_posts: [],
});

export const mutations = {
  getLastPosts(state, payload) {
    state.last_posts = payload;
  },
};

export const actions = {
  async fetchLastPosts({ commit }, payload) {
    console.log(payload, "payload");
    const qs = require("qs");
    const query = qs.stringify(
      {
        filters: {
          id: {
            $in: [...payload],
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
    commit("getLastPosts", data);
  },
};
