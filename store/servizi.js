export const state = () => ({
    servizi: null,
});

export const mutations = {
    getServizi(state, payload) {
        state.servizi = payload;
    },
};

export const actions = {
    async fetchServizi({commit}) {
        const qs = require("qs");
        const query = qs.stringify(
            {
                populate: {
                    page_intro: {
                        fields: ["title"],
                        populate: {
                            image: {
                                fields: ["url"],
                            },
                        },
                    },
                    servizi_items: {
                        fields: ["title", "text"],
                        populate: {
                            image: {
                                fields: ["url"],
                            }
                        }
                    },
                    image: {
                        fields: ["url"],
                    }
                },
            },
            {
                encodeValuesOnly: true, // prettify URL
            }
        );
        const {data} = await this.$axios.get("/servizi?" + query);
        commit("getServizi", data);
    },
};
