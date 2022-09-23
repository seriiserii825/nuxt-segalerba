export const state = () => ({
  option: {},
});

export const mutations = {
  setOption(state, payload) {
    state.option = payload;
  },
};

export const actions = {
  async fetchOption({ commit }) {
    this.$axios
      .get("/option?populate=%2A")
      .then((res) => {
        commit("setOption", res.data.data.attributes);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  },
};

export const getters = {};
