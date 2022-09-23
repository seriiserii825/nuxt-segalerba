export const state = () => ({
  home: {},
});

export const mutations = {
  getHome(state, payload) {
    state.home = payload;
  },
};

export const actions = {
  async fetchHome({ commit }) {
    const { data } = await this.$axios.get("/home?populate=%2A");
    commit("getHome", data);
  },
};

export const getters = {
  home(state) {
    return state.home;
  },
};
