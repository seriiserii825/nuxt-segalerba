export const state = () => ({
    posts: [],
    post: {}
});

export const mutations = {
    getLastPosts(state, payload) {
        state.posts = payload;
    },
    getPost(state, payload) {
        state.post = payload;
    }
};

export const actions = {
    async fetchPosts({commit}) {
        const qs = require("qs");
        const query = qs.stringify(
            {
                populate: {
                    post_tags: {
                        fields: ["title", "slug"],
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
        const {data} = await this.$axios.get("/posts?" + query);
        commit("getLastPosts", data);
    },
    async fetchPost({commit}, payload) {
        const qs = require("qs");
        const query = qs.stringify(
            {
                filter: {
                  slug: payload.slug
                },
                populate: {
                    post_tags: {
                        fields: ["title", "slug"],
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
        const {data} = await this.$axios.get("/posts/" + query);
        commit("getPost", data);
    },
};
