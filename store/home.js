export const state = () => ({
    home: null,
});

export const mutations = {
    getHome(state, payload) {
        state.home = payload;
    },
};

export const actions = {
    async fetchHome({commit}) {
        const qs = require("qs");
        const query = qs.stringify(
            {
                populate: {
                    home_intro: {
                        fields: ["title", "subtitle"],
                        populate: {
                            image: {
                                fields: ["url"],
                            },
                        },
                    },
                    features: {
                        populate: "*",
                    },
                    banner: {
                        fields: ["title", "text"],
                        populate: {
                            image: {
                                fields: ["url"],
                            }
                        }
                    }
                },
            },
            {
                encodeValuesOnly: true, // prettify URL
            }
        );
        const {data} = await this.$axios.get("/home?" + query);
        commit("getHome", data);
    },
};

export const getters = {
    home(state) {
        return state.home;
    },
};
