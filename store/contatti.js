export const state = () => ({
    contatti: null,
});

export const mutations = {
    getData(state, payload) {
        state.contatti = payload;
    },
};

export const actions = {
    async fetchData({commit}) {
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
                    image: {
                        fields: ["url"],
                    },
                },
            },
            {
                encodeValuesOnly: true, // prettify URL
            }
        );
        const {data} = await this.$axios.get("/contatti?" + query);
        commit("getData", data);
    },
};
