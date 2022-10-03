export const state = () => ({
    blog: null,
});

export const mutations = {
    getBlog(state, payload) {
        state.blog = payload;
    },
};

export const actions = {
    async fetchBlog({commit}) {
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
                },
            },
            {
                encodeValuesOnly: true, // prettify URL
            }
        );
        const {data} = await this.$axios.get("/blog?" + query);
        commit("getBlog", data);
    },
};
