export const state = () => ({
  option: null,
});

export const mutations = {
  setOption(state, payload) {
    console.log(state, "state");
    console.log(payload, "payload");
    state.option = payload;
  },
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch("storeDispatchFunc");
  },
  async storeDispatchFunc({ commit }) {
    this.$axios
      .get("/option")
      .then((res) => {
        commit("setOption", res.data.data.attributes);
        console.log(res.data.data.attributes, "res.data.data.attributes");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  },
};

export const getters = {
  getOption(state) {
    return state.option;
  },
};
