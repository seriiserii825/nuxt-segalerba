<template>
  <div class="features" v-if="features && features.length > 0">
    <div class="container-small">
      <div class="features__wrap">
        <div
          class="features__item"
          v-for="feature in features"
          :key="feature.id"
        >
          <div class="features__img" v-html="feature.icon"></div>
          <h2 class="features__title">{{ feature.title }}</h2>
          <div class="features__text" v-html="feature.text"></div>
          <div class="features__footer">
            <nuxt-link class="link-arrow" :to="`${feature.url}`">
              <span>Scopri di più</span>
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="14.7891" r="14" fill="#FF8D00"></circle>
                <path
                  d="M12 9.78906L17 15.2891L12 20.7891"
                  stroke="white"
                  stroke-width="2"
                ></path>
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Features",
  props: {
    features: {
      type: Array,
      default: () => [],
    },
  },
  // created() {
  //   console.log(this.features, "this.features");
  // },
};
</script>
