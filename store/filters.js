export const state = () => ({
  provincia_immobile: null,
  localita_immobile: null,
  zona_immobile: null,
  tipo_immobile: null,
  contrato_immobiles: null,
});

export const mutations = {
  getProvinciaImmobile(state, payload) {
    state.provincia_immobile = payload;
  },
  getLocalitaImmobile(state, payload) {
    state.localita_immobile = payload;
  },
  getZonaImmobile(state, payload) {
    state.zona_immobile = payload;
  },
  getTipoImmobile(state, payload) {
    state.tipo_immobile = payload;
  },
  getContratoImmobile(state, payload) {
    state.contrato_immobiles = payload;
  },
};

export const actions = {
  async fetchProvinciaImmobile({ commit }) {
    const qs = require("qs");
    const query = qs.stringify(
      {
        fields: ["title"],
        populate: "*",
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );
    const { data } = await this.$axios.get("/provincias?" + query);
    commit("getProvinciaImmobile", data);
  },
  async fetchLocalitaImmobile({ commit }) {
    const qs = require("qs");
    const query = qs.stringify(
      {
        fields: ["title"],
        populate: "*",
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );
    const { data } = await this.$axios.get("/localita-provincias?" + query);
    commit("getLocalitaImmobile", data);
  },
  async fetchZonaImmobile({ commit }) {
    const qs = require("qs");
    const query = qs.stringify(
      {
        fields: ["title"],
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );
    const { data } = await this.$axios.get("/zona-immobiles?" + query);
    commit("getZonaImmobile", data);
  },
  async fetchTipoImmobile({ commit }) {
    const qs = require("qs");
    const query = qs.stringify(
      {
        fields: ["title"],
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );
    const { data } = await this.$axios.get("/tipo-immobiles?" + query);
    commit("getTipoImmobile", data);
  },
  async fetchContratoImmobile({ commit }) {
    const qs = require("qs");
    const query = qs.stringify(
      {
        fields: ["title"],
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );
    const { data } = await this.$axios.get("/contrato-immobiles?" + query);
    console.log(data, "data");
    commit("getContratoImmobile", data);
  },
};
