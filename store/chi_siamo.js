export const state = () => ({
  chi_siamo: null,
});

export const mutations = {
  getChiSiamo(state, payload) {
    state.chi_siamo = payload;
  },
};

export const actions = {
  async fetchChiSiamo({ commit }) {
    const qs = require("qs");
    const query = qs.stringify(
      {
        fields: ["content", "title_1", "title_2"],
        populate: {
          page_intro: {
            fields: ["title"],
            populate: {
              image: {
                fields: ["url"],
              },
            },
          },
          image: {
            fields: ["url"],
          },
          team_1: {
            populate: "*",
          },
          team_2: {
            populate: "*",
          },
          seo: {
            populate: "*",
          },
        },
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );
    const { data } = await this.$axios.get("/chi-siamo?" + query);
    commit("getChiSiamo", data);
  },
};
