export const state = () => ({
  immobile: null,
});

export const mutations = {
  getImmobile(state, payload) {
    state.immobile = payload;
  },
};

export const actions = {
  async fetchImmobile({ commit }) {
    const qs = require("qs");
    const query = qs.stringify(
      {
        populate: "*",
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );
    const { data } = await this.$axios.get("/immobiles?" + query);
    commit("getImmobile", data);
  },
};
